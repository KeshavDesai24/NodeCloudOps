import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 mb-3">🚀 NodeCloudOps</h1>
      <p className="lead mb-4">
        End-to-end CI/CD pipeline deploying a React app to AWS Elastic Beanstalk with Docker & GitHub Actions.
      </p>
      <a href="https://github.com/keshavdesai24/NodeCloudOps" className="btn btn-primary">
        View on GitHub
      </a>
      <footer className="mt-5 text-muted">
        Built by Keshav Desai · July 2025
      </footer>
    </div>
  );
}

export default App;
