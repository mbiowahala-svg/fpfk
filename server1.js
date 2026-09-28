// FPCK Node.js/Express Backend & Client Logic (server.js / app.js)
const mockDB = {
    branches: [
        { id: 1, name: "Nairobi Cathedral Diocese", bishop: "Rev. Bishop John Kimani", town: "Nairobi", members: "12,500" },
        { id: 2, name: "Mombasa Regional Assembly", bishop: "Bishop Emmanuel Omar", town: "Mombasa", members: "6,200" },
        { id: 3, name: "Nakuru Faith Sanctuary", bishop: "Bishop David Njuguna", town: "Nakuru", members: "8,400" },
        { id: 4, name: "Kisumu Central Tabernacle", bishop: "Rev. Peter Ochieng", town: "Kisumu", members: "5,100" },
        { id: 5, name: "Eldoret Highway Sanctuary", bishop: "Rev. Joseph Rotich", town: "Eldoret", members: "7,300" }
    ],
    prayers: [
        { id: 1, name: "Sister Mary (Thika)", title: "Healing for My Family", count: 18, date: "Today" },
        { id: 2, name: "Pastor James (Kitale)", title: "Church Building Completion", count: 32, date: "Yesterday" }
    ],
    contributions: [
        { phone: "0722***123", amount: 2500, purpose: "Cathedral Expansion", date: "Just now" }
    ]
};

// M-Pesa STK Push Express Simulation API
function simulateMpesaPush(phone, amount, purpose) {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockDB.contributions.unshift({
                phone: phone.replace(/(\d{3})\d{4}(\d{3})/, "$1****$2"),
                amount: parseFloat(amount),
                purpose: purpose,
                date: "Just now"
            });
            resolve({ status: "SUCCESS", ResponseCode: "0", CustomerMessage: "STK Push Sent. Complete pin entry on phone." });
        }, 1200);
    });
}