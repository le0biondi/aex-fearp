// src/services/CaseService.js
import { cases } from '../data/cases';

/**
 * Service for handling case-related operations
 */
const CaseService = {
  /**
   * Get all available cases
   * @returns {Array} List of all cases
   */
  getAllCases() {
    return cases;
  },

  /**
   * Get a case by its ID
   * @param {string} caseId - The ID of the case to retrieve
   * @returns {Object|null} The case object or null if not found
   */
  getCaseById(caseId) {
    return cases.find(c => c.id === caseId) || null;
  },

  /**
   * Get all locations for a specific case
   * @param {string} caseId - The ID of the case
   * @returns {Array} List of locations for the case
   */
  getCaseLocations(caseId) {
    const caseData = this.getCaseById(caseId);
    return caseData ? caseData.locations : [];
  },

  /**
   * Check if all required SDGs have been discovered for a case
   * @param {string} caseId - The ID of the case
   * @param {Array} discoveredSdgs - List of discovered SDG IDs
   * @returns {boolean} True if all required SDGs have been discovered
   */
  hasDiscoveredAllRequiredSDGs(caseId, discoveredSdgs) {
    const caseData = this.getCaseById(caseId);
    if (!caseData || !caseData.relatedSDGs || !discoveredSdgs) return false;
    
    return caseData.relatedSDGs.every(sdgId => discoveredSdgs.includes(sdgId));
  },

  /**
   * Check if a case is ready to be solved
   * @param {string} caseId - The ID of the case
   * @param {Array} completedObjectives - List of completed objectives
   * @param {Array} discoveredSdgs - List of discovered SDG IDs
   * @returns {boolean} True if the case is ready to be solved
   */
  isCaseReadyToBeSolved(caseId, completedObjectives, discoveredSdgs, connections) {
    const caseData = this.getCaseById(caseId);
    if (!caseData) return false;
    
    // Check if all objectives are completed
    const allObjectivesCompleted = caseData.objectives.length === completedObjectives.length;
    
    // Check if all required SDGs are discovered
    const allSdgsDiscovered = this.hasDiscoveredAllRequiredSDGs(caseId, discoveredSdgs);
    
    // Check if minimum number of connections have been made
    const minConnectionsRequired = caseData.minConnections || 3;
    const enoughConnections = connections.length >= minConnectionsRequired;
    
    return allObjectivesCompleted && allSdgsDiscovered && enoughConnections;
  }
};

export default CaseService;