// src/components/OurTeam.js
import React from 'react';
import '../styles/OurTeam.css'

const OurTeam = () => (
  <section className="our-team">
  <h2>Meet Our Team</h2>
  <div className="team-members">
    {/* <!-- Director --> */}
    <div className="team-member">
      <div className="avatar">D</div>
      <h3>Director</h3>
      <p className="bio">Our Director leads with a vision of innovation and growth, ensuring the company's success and guiding our long-term strategy.</p>
    </div>

    {/* <!-- Manager --> */}
    <div className="team-member">
      <div className="avatar">M</div>
      <h3>Manager</h3>
      <p className="bio">The Manager oversees daily operations, ensuring smooth processes, and optimizing team performance for better outcomes.</p>
    </div>

    {/* <!-- Store Manager --> */}
    <div className="team-member">
      <div className="avatar">SM</div>
      <h3>Store Manager</h3>
      <p className="bio">Responsible for inventory management and ensuring the availability of all required supplies, the Store Manager ensures the team is always well-stocked and efficient.</p>
    </div>

    {/* <!-- Accountant --> */}
    <div className="team-member">
      <div className="avatar">A</div>
      <h3>Accountant</h3>
      <p className="bio">Our Accountant manages financial records, ensures compliance, and supports decision-making through accurate and timely financial reports.</p>
    </div>
  </div>
</section>

);

export default OurTeam;
