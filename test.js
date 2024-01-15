document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const sidebar = document.getElementById("sidebar");
  
    menuIcon.addEventListener("click", function() {
      sidebar.style.left = (sidebar.style.left === "0px") ? "-250px" : "0px";
    });
  
    document.addEventListener("click", function(event) {
      const isClickInside = menuIcon.contains(event.target) || sidebar.contains(event.target);
      if (!isClickInside) {
        sidebar.style.left = "-250px";
      }
    });
  });
  function openPortfolio(portfolioId) {
    // Hide all portfolios
    const portfolios = document.querySelectorAll('.portfolio');
    portfolios.forEach(portfolio => {
      portfolio.style.display = 'none';
    });
  
    // Show the selected portfolio with a sliding animation
    const selectedPortfolio = document.getElementById(portfolioId);
    selectedPortfolio.style.display = 'block';
    setTimeout(() => {
      selectedPortfolio.style.transform = 'translateX(0)';
    }, 10);
  
    // Hide the other portfolios (if any)
    portfolios.forEach(portfolio => {
      if (portfolio.id !== portfolioId) {
        portfolio.style.transform = 'translateX(100%)';
      }
    });
  }
  