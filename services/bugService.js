const Bug = require('../models/Bug.model');


const bugService = {
    find: async (query = {}) => {
        try {
            const { location, season } = query;
            const filter = {};

            if (location) {
                filter.location = location.toLowerCase();
            }

            if (season) {
                const seasonsArray = Array.isArray(season)
                    ? season
                    : season.split(",");

                filter.season = {
                    $in: seasonsArray.map(s => s.toLowerCase())
                };
            }

            console.log("FILTER:", filter);
            const bugs = await Bug.find(filter);

            return bugs;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
};

module.exports = bugService; 