const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    teamId: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
    }
})

const GroupSchema = new mongoose.Schema({
    teamId: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
    },
    points: {
        type: Number,
    },
    games: {
        type: Number,
    },
    victories: {
        type: Number,
    },
    draws: {
        type: Number,
    },
    defeats: {
        type: Number,
    }
})

const GameSchema = new mongoose.Schema({
    visitingTeamId: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
    },
    homeTeam: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
    },
    gameId: {
        type: Schema.Types.ObjectId,
        ref: 'Game',
    },
    winnerId: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
    }
})

const EliminatoryCompetitionSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    regionId: {
        type: Schema.Types.ObjectId,
        ref: 'Region',
        required: true
    },
    pictureUrl: {
        type: String,
        require: true
    },
    numberOfTeams: {
        type: Number,
        require: true
    },
    teams: [TeamSchema],
    group: [GroupSchema],
    roundOf16Games:[GameSchema],
    quarterFinalsGames:[GameSchema],
    semiFinalsGames:[GameSchema],
    finalGame: GameSchema,
    winnerId: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    award: {
        type: Number
    }
})

const EliminatoryCompetition = mongoose.model('EliminatoryCompetition', EliminatoryCompetitionSchema)
module.exports = EliminatoryCompetition