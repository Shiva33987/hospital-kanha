from PIL import Image
import numpy as np
import os

img1_path = r'C:/Users/shiva/.gemini/antigravity/brain/0617cd31-5e59-4f18-b4ed-e661a231fd19/.user_uploaded/media_1794590150859_fd49d2dc.jpg'
img2_path = r'C:/Users/shiva/.gemini/antigravity/brain/0617cd31-5e59-4f18-b4ed-e661a231fd19/.user_uploaded/media_1794590150912_f29f2617.jpg'
img3_path = r'C:/Users/shiva/.gemini/antigravity/brain/0617cd31-5e59-4f18-b4ed-e661a231fd19/.user_uploaded/media_1794590150943_3a1ddd26.jpg'

out_dir = r'd:/hospital/public/images'
os.makedirs(out_dir, exist_ok=True)

# 1. Process Logo from Image 1
img1 = Image.open(img1_path).convert('RGB')
arr1 = np.array(img1)

# Bounding box is around x0=210, y0=426, x1=664, y1=569
# Let's crop with 12px margin
crop1 = img1.crop((200, 415, 675, 575))
arr_crop = np.array(crop1, dtype=float)

# Background color near corners
bg_color = np.array([0.0, 19.0, 70.0])
dist = np.linalg.norm(arr_crop - bg_color, axis=2)

# Calculate alpha: dist < 35 -> 0, dist > 90 -> 255
alpha = np.clip((dist - 35.0) / (90.0 - 35.0) * 255.0, 0, 255).astype(np.uint8)

# 1a. White Logo with transparent background
logo_white_arr = np.zeros((crop1.height, crop1.width, 4), dtype=np.uint8)
logo_white_arr[:, :, 0] = 255
logo_white_arr[:, :, 1] = 255
logo_white_arr[:, :, 2] = 255
logo_white_arr[:, :, 3] = alpha
logo_white = Image.fromarray(logo_white_arr, mode='RGBA')
logo_white.save(os.path.join(out_dir, 'kanha-logo-white.png'))
print('Saved kanha-logo-white.png')

# 1b. Colored Logo for Light Backgrounds (Navy #0a1e46 and Blue #0284c7)
# Separate icon (x: 0 to 150 approx) and text (x: 150 to end)
logo_color_arr = np.zeros((crop1.height, crop1.width, 4), dtype=np.uint8)
split_x = 150
# Icon part: Medical blue #0284c7
logo_color_arr[:, :split_x, 0] = 2
logo_color_arr[:, :split_x, 1] = 132
logo_color_arr[:, :split_x, 2] = 199
# Text part: Deep Navy #0a1e46
logo_color_arr[:, split_x:, 0] = 10
logo_color_arr[:, split_x:, 1] = 30
logo_color_arr[:, split_x:, 2] = 70
logo_color_arr[:, :, 3] = alpha
logo_color = Image.fromarray(logo_color_arr, mode='RGBA')
logo_color.save(os.path.join(out_dir, 'kanha-logo.png'))
print('Saved kanha-logo.png')

# 1c. Emblem icon only
emblem = logo_color.crop((0, 0, split_x, crop1.height))
# trim empty margins
bbox = emblem.getbbox()
if bbox:
    emblem = emblem.crop(bbox)
emblem.save(os.path.join(out_dir, 'kanha-emblem.png'))

emblem_white = logo_white.crop((0, 0, split_x, crop1.height))
bbox_w = emblem_white.getbbox()
if bbox_w:
    emblem_white = emblem_white.crop(bbox_w)
emblem_white.save(os.path.join(out_dir, 'kanha-emblem-white.png'))
print('Saved kanha-emblem.png and kanha-emblem-white.png')

# 2. Extract Building Photo from Image 2
img2 = Image.open(img2_path)
# Building is top right: x from ~340 to 715, y from ~20 to 350
building = img2.crop((345, 18, 715, 345))
building.save(os.path.join(out_dir, 'kanha-building.jpg'), quality=95)
print('Saved kanha-building.jpg')

# 3. Extract Facilities from Image 3
# State-of-the-Art Medical Facilities: 6 boxes in a 2x3 grid
# Let's inspect coordinates of the 6 cards in image 3:
# Row 1: y around 390 to 555
# Row 2: y around 580 to 735
# Col 1: x around 20 to 240
# Col 2: x around 245 to 480
# Col 3: x around 485 to 705
img3 = Image.open(img3_path)

facilities_img3 = [
    ('facility-ct-scan.jpg', (25, 395, 235, 500)),
    ('facility-dialysis.jpg', (260, 395, 470, 500)),
    ('facility-urology-suite.jpg', (495, 395, 705, 500)),
    ('facility-operation-theaters.jpg', (25, 575, 235, 680)),
    ('facility-emergency.jpg', (260, 575, 470, 680)),
    ('facility-pharmacy.jpg', (495, 575, 705, 680)),
]

for name, box in facilities_img3:
    crop = img3.crop(box)
    crop.save(os.path.join(out_dir, name), quality=95)
    print(f'Saved {name} with size {crop.size}')

# 4. Extract Facilities from Image 2
# In image 2:
# 6 cards horizontally in row: y: 405 to 550
# Card 1: ICU & Critical Care (x: 20 to 130)
# Card 2: Diagnostics & Lab (x: 135 to 245)
# Card 3: 24/7 Pharmacy (x: 250 to 360)
# Card 4: 24/7 Ambulance Service (x: 365 to 475)
# Card 5: Inpatient Rooms (x: 480 to 590)
# Card 6: Insurance & TPA (x: 595 to 705)
facilities_img2 = [
    ('service-icu.jpg', (20, 405, 130, 550)),
    ('service-lab-diagnostics.jpg', (135, 405, 245, 550)),
    ('service-pharmacy-store.jpg', (250, 405, 360, 550)),
    ('service-ambulance.jpg', (365, 405, 475, 550)),
    ('service-inpatient-room.jpg', (480, 405, 590, 550)),
    ('service-cashless-insurance.jpg', (595, 405, 705, 550)),
]

for name, box in facilities_img2:
    crop = img2.crop(box)
    crop.save(os.path.join(out_dir, name), quality=95)
    print(f'Saved {name} with size {crop.size}')

print('All image extractions complete!')

