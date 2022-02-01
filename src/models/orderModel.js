const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({

    userId: {
        type: ObjectId,
        required: true,
        ref: 'User',
        trim: true
    },

    items: [{
        productId: {
            type: ObjectId,
            required: true,
            ref: 'Product',
            trim: true
        },
        quantity: { 
            type: Number,
            required: true,
            trim: true
        }
    }],

    totalPrice: { 
        type: Number,
        required: true,
        trim: true
    },

    totalItems: { 
        type: Number,
        required: true,
        trim: true
    },

    totalQuantity: { 
        type: Number,
        required: true,
        trim: true
    },

    cancellable: {
        type: Boolean,
        default: true
    },

    status: {
        type: String,
        default: 'pending',
        enum: ["pending", "completed", "cancelled"]
    },

    deletedAt: { 
        type: Date,
    },
    
    isDeleted: {
        type: Boolean,
        default: false
    },

},
    { timestamps: true }
)

module.exports = mongoose.model('Order', orderSchema)