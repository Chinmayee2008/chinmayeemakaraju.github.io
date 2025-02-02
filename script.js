// JavaScript for Modal Functionality
function showDetails(id) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  // Set modal content based on the clicked item
  if (id === "project1") {
    modalTitle.textContent = "Risk Analysis Dashboard";
    modalDescription.textContent = "Developed Tableau dashboards to monitor compliance and mitigate risks, reducing issue resolution times by 25%.";
  } else if (id === "project2") {
    modalTitle.textContent = "AWS Cloud Migration";
    modalDescription.textContent = "Migrated data infrastructure to AWS, improving scalability and data reliability for risk management applications.";
  } else if (id === "project3") {
    modalTitle.textContent = "End-to-End ETL Pipeline";
    modalDescription.textContent = "Built a Python-based ETL pipeline integrated with Snowflake and Tableau to process stock market data and visualize insights, enabling data-driven trading strategies.";
  } else if (id === "cert1") {
    modalTitle.textContent = "AI Agents in LangChain";
    modalDescription.textContent = "Certification details for AI Agents in LangChain.";
  } else if (id === "cert2") {
    modalTitle.textContent = "AWS Cloud Practitioner";
    modalDescription.textContent = "Certification details for AWS Cloud Practitioner.";
  } else if (id === "cert3") {
    modalTitle.textContent = "Databricks Gen AI Fundamentals";
    modalDescription.textContent = "Certification details for Databricks Gen AI Fundamentals.";
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
