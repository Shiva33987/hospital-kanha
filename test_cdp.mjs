import { spawn } from 'child_process';
import fs from 'fs';

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--user-data-dir=C:\\Users\\shiva\\AppData\\Local\\Temp\\chrome_test_profile',
    'http://localhost:5173/'
  ]);

  console.log('Chrome spawned, waiting for debugging port...');
  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://localhost:9222/json/list');
    const targets = await listRes.json();
    console.log('Targets:', targets.length);
    const target = targets.find(t => t.url.includes('localhost:5173')) || targets[0];
    console.log('Connecting to:', target.webSocketDebuggerUrl);

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.id && callbacks.has(data.id)) {
        callbacks.get(data.id)(data);
        callbacks.delete(data.id);
      }
    };

    await new Promise(r => ws.onopen = r);

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const msgId = id++;
        callbacks.set(msgId, resolve);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    // Enable Page, Runtime, Log
    await send('Page.enable');
    await send('Runtime.enable');
    await send('Log.enable');

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        console.log('CONSOLE:', data.params.type, data.params.args.map(a => a.value || a.description).join(' '));
      }
      if (data.method === 'Runtime.exceptionThrown') {
        console.error('EXCEPTION:', JSON.stringify(data.params.exceptionDetails));
      }
      if (data.id && callbacks.has(data.id)) {
        callbacks.get(data.id)(data);
        callbacks.delete(data.id);
      }
    };

    // Navigate to ensure fresh load
    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await new Promise(r => setTimeout(r, 2000));

    // Capture at top
    let shot = await send('Page.captureScreenshot');
    fs.writeFileSync('C:\\Users\\shiva\\.gemini\\antigravity\\brain\\0617cd31-5e59-4f18-b4ed-e661a231fd19\\desktop_top.png', Buffer.from(shot.result.data, 'base64'));

    // Scroll down 600px
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 600)' });
    await new Promise(r => setTimeout(r, 1000));

    // Check header position & visibility
    let headerInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const h = document.querySelector('header');
        if (!h) return { found: false };
        const rect = h.getBoundingClientRect();
        const style = window.getComputedStyle(h);
        return {
          found: true,
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          position: style.position,
          zIndex: style.zIndex,
          display: style.display,
          visibility: style.visibility,
          opacity: style.opacity,
          scrollY: window.scrollY
        };
      })()`,
      returnByValue: true
    });
    console.log('Header info when scrolled 600px:', JSON.stringify(headerInfo.result.value));

    shot = await send('Page.captureScreenshot');
    fs.writeFileSync('C:\\Users\\shiva\\.gemini\\antigravity\\brain\\0617cd31-5e59-4f18-b4ed-e661a231fd19\\desktop_scrolled_600.png', Buffer.from(shot.result.data, 'base64'));

    // Scroll down 1400px (to specialties / doctors)
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1400)' });
    await new Promise(r => setTimeout(r, 1000));

    shot = await send('Page.captureScreenshot');
    fs.writeFileSync('C:\\Users\\shiva\\.gemini\\antigravity\\brain\\0617cd31-5e59-4f18-b4ed-e661a231fd19\\desktop_scrolled_1400.png', Buffer.from(shot.result.data, 'base64'));

    // Test 2: Mobile Viewport 390x844
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await new Promise(r => setTimeout(r, 1000));

    shot = await send('Page.captureScreenshot');
    fs.writeFileSync('C:\\Users\\shiva\\.gemini\\antigravity\\brain\\0617cd31-5e59-4f18-b4ed-e661a231fd19\\mobile_top.png', Buffer.from(shot.result.data, 'base64'));

    // Scroll down on mobile 600px
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 600)' });
    await new Promise(r => setTimeout(r, 1000));

    let mobileHeaderInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const h = document.querySelector('header');
        if (!h) return { found: false };
        const rect = h.getBoundingClientRect();
        const style = window.getComputedStyle(h);
        return {
          found: true,
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          position: style.position,
          zIndex: style.zIndex,
          display: style.display,
          scrollY: window.scrollY
        };
      })()`,
      returnByValue: true
    });
    console.log('Mobile Header info when scrolled 600px:', JSON.stringify(mobileHeaderInfo.result.value));

    shot = await send('Page.captureScreenshot');
    fs.writeFileSync('C:\\Users\\shiva\\.gemini\\antigravity\\brain\\0617cd31-5e59-4f18-b4ed-e661a231fd19\\mobile_scrolled_600.png', Buffer.from(shot.result.data, 'base64'));

    ws.close();
  } catch (err) {
    console.error('Error in test:', err);
  } finally {
    chrome.kill();
    console.log('Done!');
  }
}

run();
