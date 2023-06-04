const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const formatDate = require('../utils/format.js')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //must be between 1 and 280 characters
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use getter method to format timestamp on query
            get: (date) => formatDate(date),
        },
        username: {
            type: String,
            required: true,
        },
        //use Reaction to validate data for a reaction
        reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }
);

//virtual property reactionCount that gets the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

//virtual property 'reactionCount' that gets the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}
);

//initialize thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
