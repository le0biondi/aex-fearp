// src/services/SDGService.js
import { sdgs } from '../data/sdgs';

/**
 * Service for handling SDG-related operations
 */
const SDGService = {
  /**
   * Get all SDGs
   * @returns {Array} List of all SDGs
   */
  getAllSDGs() {
    return sdgs;
  },

  /**
   * Get an SDG by its ID
   * @param {number} sdgId - The ID of the SDG to retrieve
   * @returns {Object|null} The SDG object or null if not found
   */
  getSDGById(sdgId) {
    return sdgs.find(sdg => sdg.id === sdgId) || null;
  },

  /**
   * Get SDGs by their IDs
   * @param {Array} sdgIds - List of SDG IDs to retrieve
   * @returns {Array} List of SDG objects
   */
  getSDGsByIds(sdgIds) {
    if (!sdgIds || !Array.isArray(sdgIds)) return [];
    return sdgs.filter(sdg => sdgIds.includes(sdg.id));
  },

  /**
   * Get SDGs related to a specific SDG
   * @param {number} sdgId - The ID of the SDG
   * @returns {Array} List of related SDG objects
   */
  getRelatedSDGs(sdgId) {
    const sdg = this.getSDGById(sdgId);
    if (!sdg || !sdg.connections || !Array.isArray(sdg.connections)) return [];
    
    return this.getSDGsByIds(sdg.connections);
  },

  /**
   * Get SDGs by theme or category
   * @param {string} theme - The theme or category to filter by
   * @returns {Array} List of SDG objects related to the theme
   */
  getSDGsByTheme(theme) {
    if (!theme) return [];
    
    return sdgs.filter(sdg => 
      sdg.themes && 
      Array.isArray(sdg.themes) && 
      sdg.themes.some(t => t.toLowerCase().includes(theme.toLowerCase()))
    );
  }
};

export default SDGService;