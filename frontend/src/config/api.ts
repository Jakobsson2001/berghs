/**
 * API Base URL Configuration
 * 
 * This file centralizes the API base URL configuration for the application.
 * 
 * Environment Variable Setup:
 * - In development: Uses http://localhost:5000 by default
 * - In production: Set VITE_API_BASE_URL environment variable to your Render backend URL
 * 
 * How to set VITE_API_BASE_URL for production:
 * 1. In Render dashboard: Go to your frontend service → Environment → Add environment variable
 * 2. Set key: VITE_API_BASE_URL
 * 3. Set value: https://your-backend-name.onrender.com (your actual Render backend URL)
 * 
 * Note: Vite requires the VITE_ prefix for environment variables to be exposed to the client.
 * The variable will be available at build time and embedded in the bundle.
 */

// Vite uses import.meta.env for environment variables
// In development, if VITE_API_BASE_URL is not set, default to localhost:5000
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export { API_BASE_URL };

