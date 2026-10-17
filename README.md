# 🍰 BR Bakery - Sweet Order System

A modern, responsive, and elegant sweet ordering and billing application crafted specifically for **BR Bakery**. Designed with a luxurious **Burgundy & Off-White** palette, with warm gold accents, tailored for seamless use on **mobile phones, tablets, and desktop computers**.

## 🎂 Cake Counter Order (Direct WhatsApp Dispatch to Cake Maker)

A dedicated, paperless tool built specifically for bakery salespersons to replace manual paper chits when ordering cakes from the kitchen / cake maker!

### Key Capabilities:
- **Flavors by Weight**: Steppers for **0.5 kg (Half Kg)**, **1.0 kg (1 Kg)**, **1.5 kg**, and **2.0 kg** for popular cakes (Black Forest, White Forest, Chocolate Truffle, Red Velvet, Pineapple, Butterscotch, Blueberry, etc.) plus custom flavors.
- **Cake Maker Details**: Save the cake maker's WhatsApp number once so it is remembered automatically.
- **Required Time**: Quick chips for *Today 4 PM*, *Tomorrow 9 AM*, *Urgent (2 hrs)*, or custom time slot.
- **Special Customizations**: Toggle eggless / with egg, shape (round, heart, square), message on cake, and special notes.
- **One-Tap WhatsApp Dispatch**: Generates a clean, emoji-formatted kitchen production slip and opens WhatsApp directly to the cake maker.
- **KOT Ticket**: Print physical kitchen tickets if needed.
- **"Load Example" Button**: Loads your exact example: *Blackforest 0.5 kg (3 cakes), 1.0 kg (2 cakes)*.

---

## 📋 Complete Sweets & Snacks Catalog (30 Items)

| No. | Item Name | Category | Price per piece |
|---|---|---|---|
| 1 | Besan Laddu | Laddu | ₹15 |
| 2 | Motichoor Laddu | Laddu | ₹15 |
| 3 | Godi Laddu | Laddu | ₹15 |
| 4 | Dinki Laddu | Laddu | ₹15 |
| 5 | Kaddi | Snacks | ₹10 |
| 6 | Special Laddu | Laddu | ₹12 |
| 7 | Normal Laddu | Laddu | ₹10 |
| 8 | Halwa | Pedas & Halwa | ₹20 |
| 9 | Chocolate Barfi | Barfi & Kaju | ₹20 |
| 10 | Dharwad Peda | Pedas & Halwa | ₹20 |
| 11 | Seal Peda | Pedas & Halwa | ₹20 |
| 12 | Dry Fruits Barfi | Barfi & Kaju | ₹20 |
| 13 | Kaju Barfi | Barfi & Kaju | ₹30 |
| 14 | Milk Cake | Barfi & Kaju | ₹20 |
| 15 | Ghee Mysore Pak | Mysore Pak | ₹20 |
| 16 | Horlicks Mysore Pak | Mysore Pak | ₹20 |
| 17 | Milk Mysore Pak | Mysore Pak | ₹20 |
| 18 | Dates Mysore Pak | Mysore Pak | ₹20 |
| 19 | Badam Barfi | Barfi & Kaju | ₹20 |
| 20 | Kesar Peda | Pedas & Halwa | ₹20 |
| 21 | Kalkandh Peda | Pedas & Halwa | ₹20 |
| 22 | Jilebi | Snacks | ₹10 |
| 23 | Jahangir | Snacks | ₹15 |
| 24 | Dates Roll | Snacks | ₹20 |
| 25 | Saat | Snacks | ₹10 |
| 26 | Kashoor | Snacks | ₹12 |
| 27 | Normal Mysore Pak | Mysore Pak | ₹12 |
| 28 | Malpuri | Snacks | ₹10 |
| 29 | Masala Cookies | Snacks | ₹10 |
| 30 | Soan Papdi | Snacks | ₹15 |

---

## 📦 Sweet Box Packaging Charges

| Box Type | Capacity | Cost Each |
|---|---|---|
| **3-item box** | 3 sweets | **₹10** |
| **5-item box** | 5 sweets | **₹10** |
| **7-item box** | 7 sweets | **₹15** |

---

## ✨ Application Features

### 1. ⚙️ Dynamic Price Settings (Custom Rates & Packaging)
- Click the **"Price Settings"** button in the top burgundy header.
- **Sweets Prices Tab**: Easily edit the default price per piece for any of the 30 sweets (with instant search inside the settings modal).
- **Box Packaging Tab**: Update the cost and piece capacity for each box type (3-item, 5-item, 7-item).
- **Persistent Storage**: Changes are automatically stored in browser `localStorage` and will persist across reloads.
- **Instant Recalculation**: Existing orders automatically recalculate their totals based on the new prices!
- **Factory Reset**: One-click **"Reset to Official Defaults"** button reverts all prices back to your official price list.

### 2. 🔍 Fast Navigation & Filtering
- **Category Tabs**: Filter between *All (30)*, *Laddus*, *Mysore Pak*, *Barfi & Kaju*, *Pedas & Halwa*, *Snacks & Others*.
- **Selected Only Filter**: Instantly displays only the items that have quantity > 0 so counter staff can review before printing!
- **Instant Search**: Type any letter to instantly filter sweets in real time.

### 2. ⚡ Counter Steppers & Touch Presets
- Touch-friendly `+` and `-` buttons.
- Direct numeric keyboard input.
- Quick bulk buttons (`+10`, `+50`) for fast wedding and festival order processing.

### 3. 📦 Smart Box Packaging Capacity Indicator
- Computes `Total Sweets Ordered` vs `Total Box Capacity`.
- Displays status badge: `✓ Perfectly Packed`, `⚠ X pcs unpackaged`, or `+X extra capacity`.

### 4. 💰 Total & Payment Breakdown
- Sweet Subtotal
- Box Packaging Charges
- Advance Paid & Balance Due calculation
- Highlighted Grand Total

### 5. 🚀 Sharing & Receipts
- 📋 **Copy Complete Order**: Formatted with emoji-rich text ready for WhatsApp / SMS.
- 💬 **WhatsApp Direct Send**: Opens WhatsApp with pre-filled order receipt to the customer's mobile number.
- 🧾 **Printable Final Order Receipt**: Professional BR Bakery invoice modal with print styling for thermal receipt printers or A4 / PDF.
- 🕒 **Order History**: Automatically stored in local browser memory.
- 🌟 **"Load Sample" Button**: 1-click test button in top bar.

---

## 🚀 How to Open
1. **Directly in Browser**: Double click [index.html](file:///d:/sweet%20order/index.html) to open in any web browser.
2. **Via Local Server**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000`.
