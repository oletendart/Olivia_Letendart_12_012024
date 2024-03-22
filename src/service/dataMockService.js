import { useEffect } from "react";
import { fetchData } from "./apiService.js";
import PropTypes from "prop-types";

const DataMockService = {
    // Fonction générique pour récupérer et formater les données d'un fichier JSON
    getData: async (filename) => {
        try {
            const data = await fetchData(`../src/data/${filename}`);
            return formatData(filename, data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            throw error;
        }
    }
};

// Fonction de formatage des données
const formatData = (filename, data) => {
    switch (filename) {
        case 'usersData.json':
            return formatUsersData(data);
        case 'usersActivity.json':
            return formatUsersActivity(data);
        case 'usersAverageSessions.json':
            return formatUsersAverageSessions(data);
        case 'usersPerformance.json':
            return formatUsersPerformance(data);
        default:
            return data;
    }
};

// Fonction de formatage pour userData.json
const formatUsersData = (data) => {
    return data.map(entry => {
        const { data: { id, userInfos, score, keyData } } = entry;
        return {
            id,
            ...userInfos,
            score,
            keyData
        };
    });
};

// Fonction de formatage pour userActivity.json
const formatUsersActivity = (data) => {
    return data.map(entry => {
        const { data: { userId, sessions } } = entry;
        return {
            userId,
            sessions
        };
    });
};

// Fonction de formatage pour userAverageSessions.json
const formatUsersAverageSessions = (data) => {
    return data.map(entry => {
        const { data: { userId, sessions } } = entry;
        return {
            userId,
            sessions
        };
    });
};

// Fonction de formatage pour usersPerformance.json
const formatUsersPerformance = (data) => {
    return data.map(entry => {
        const { data: { userId, kind, data: performanceData } } = entry;
        return {
            userId,
            kind,
            performanceData
        };
    });
};

DataMockService.propTypes = {
    usersData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        userInfos: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            age: PropTypes.number
        }).isRequired,
        score: PropTypes.number.isRequired,
        keyData: PropTypes.shape({
            calorieCount: PropTypes.number.isRequired,
            proteinCount: PropTypes.number.isRequired,
            carbohydrateCount: PropTypes.number.isRequired,
            lipidCount: PropTypes.number.isRequired
        }).isRequired
    })),
    usersActivity: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number.isRequired,
        sessions: PropTypes.arrayOf(PropTypes.shape({
            day: PropTypes.string.isRequired,
            kilogram: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired
        })).isRequired
    })),
    usersAverageSessions: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number.isRequired,
        sessions: PropTypes.arrayOf(PropTypes.shape({
            day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            sessionLength: PropTypes.number.isRequired
        })).isRequired
    })),
    usersPerformance: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number.isRequired,
        kind: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
        performanceData: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number.isRequired,
            kind: PropTypes.number.isRequired
        })).isRequired
    }))
};

export default DataMockService;
