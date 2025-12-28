// This file allows the shop owner to easily update website content.
// Just change the text inside the quotes "".

const storeData = {
    // 1. Home Section
    info: {
        name: "Ayusha Medicals", // Placeholder Name
        tagline: "Your Trusted Family Health Partner",
        logoText: "Ayusha Medicals", // Or path to image 'assets/images/logo.png'
        phone: "+91 9503834133",
        whatsapp: "919503834133",
        email: "contact@ayushamedicals.com",
        address: "M. no. 453, Gala no. 1, ground floor, in front of Z. P. School, Dahiwadi - 416311",
        mapUrl: "https://maps.google.com/maps?q=17.166961,74.805548&t=&z=15&ie=UTF8&iwloc=&output=embed", // Updated map to specific coordinates
        workingHours: "Mon - Sat: 9:00 AM - 10:00 PM | Sun: 10:00 AM - 2:00 PM",
        licenseNumber: "20-344471/21-344472",
        pharmacistName: "Smita Nalawade",
        pharmacistReg: "Reg. No. 241618"
    },

    // 2. About Section
    about: {
        title: "About Us",
        description: "Serving the community for over 6 years, Ayusha Medicals is committed to providing genuine medicines and expert healthcare advice. We are a fully licensed medical store managed by qualified pharmacists.",
        mission: "To ensure every family has access to affordable, genuine medicines and trusted health guidance.",
        highlights: [
            { icon: "fas fa-check-circle", text: "100% Genuine Medicines" },
            { icon: "fas fa-user-md", text: "Licensed Pharmacist" },
            { icon: "fas fa-truck", text: "Free Home Delivery*" }
        ],
        // Shop Images
        mainImage: "main shop image.jpeg",
        galleryImages: [
            "shop 1.jpeg",
            "shop 2.jpeg",
            "shop 3.jpeg"
        ],
        licenses: [
            "ayusha license.jpeg"
        ]
    },

    // 3. Products Categories
    categories: [
        {
            title: "Prescription Medicines",
            description: "Genuine medicines for chronic and acute conditions.",
            icon: "fas fa-prescription-bottle-alt",
            note: "Prescription Required"
        },
        {
            title: "OTC Products",
            description: "Pain relief, cough syrups, vitamins, and first aid.",
            icon: "fas fa-pills",
            note: "No Prescription Needed"
        },
        {
            title: "Baby Care",
            description: "Diapers, baby food, skincare, and accessories.",
            icon: "fas fa-baby",
            note: "Trusted Brands"
        },
        {
            title: "Health Devices",
            description: "BP monitors, sugar testing kits, thermometers, etc.",
            icon: "fas fa-heartbeat",
            note: "Sales & Demo"
        },
        {
            title: "Personal Care",
            description: "Skin care, hair care, and hygiene products.",
            icon: "fas fa-pump-soap",
            note: "Wide Range"
        },
        {
            title: "Supplements",
            description: "Proteins, multivitamins, and immunity boosters.",
            icon: "fas fa-dumbbell",
            note: "Authentic Sourcing"
        }
    ],

    // 4. Services
    services: [
        { title: "Prescription Refill", icon: "fas fa-file-prescription" },
        { title: "Home Delivery", icon: "fas fa-motorcycle" },
        { title: "BP Check-up", icon: "fas fa-stethoscope" },
        { title: "Health Advice", icon: "fas fa-user-nurse" }
    ],

    // 8. FAQs
    faqs: [
        {
            question: "Do you deliver medicines at home?",
            answer: "Yes, we offer free home delivery within 3km for orders above ₹500."
        },
        {
            question: "Do I need a prescription to order?",
            answer: "For Schedule H and H1 drugs, a valid prescription is mandatory. OTC products can be purchased without one."
        },
        {
            question: "What are your payment methods?",
            answer: "We accept Cash, UPI (GPay, PhonePe, Paytm), and Credit/Debit Cards."
        },
        {
            question: "Can I return medicines?",
            answer: "We accept returns for cut strips and sealed bottles within 3 days of purchase, provided the bill is produced. Refrigerated items cannot be returned."
        }
    ]
};
