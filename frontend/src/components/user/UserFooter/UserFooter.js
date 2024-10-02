import React from 'react';

function UserFooter() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-4" style={{ backgroundColor: '#023020' }}>
        <p className="text-white mb-0">
          © {new Date().getFullYear()} MyNewApp.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default UserFooter;
