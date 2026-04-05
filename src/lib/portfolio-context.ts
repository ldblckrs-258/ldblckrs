// Function to extract portfolio context data from data files
export async function getPortfolioContextData(): Promise<string> {
  try {
    // Import data directly in a server component or API route
    const { default: meData } = await import('@/static/data/me');
    const { default: experiences } = await import('@/static/data/experiences');
    const { default: projects } = await import('@/static/data/projects');
    const { default: techStack } = await import('@/static/data/tech-stack');
    
    // Compile context information
    const contextParts = [
      '# PORTFOLIO OWNER INFORMATION',
      JSON.stringify(meData, null, 2),
      '# EXPERIENCE INFORMATION',
      JSON.stringify(experiences, null, 2),
      '# PROJECT INFORMATION',
      JSON.stringify(projects, null, 2),
      '# TECHNICAL SKILLS INFORMATION',
      JSON.stringify(techStack, null, 2)
    ];
    
    return contextParts.join('\n\n');
  } catch (error) {
    console.error('Error fetching portfolio context data:', error);
    return 'Error loading portfolio data.';
  }
}