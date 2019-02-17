<a href="http://www.dappush.info"> dappush.info </a>

# Project Name 
Dappush

# Project Tagline/Description
WEA meets Ethereum. 
- Censorship Resistant Emergency Alerts, Decentralized Push Notifications with Opt-in User Preferences on Smart Contract State Changes.

# Team Members
Josh Han, Trevor Clarke, Waleed Elsakka

# Detailed Project Description
Dappush.info

# Tech Stack

State Channel Bootnodes
- An economy driven application architecture

Architecture:
- redis
- WebRTC - https://peerjs.com/
- nodejs

RPS:
- both players deploy contracts
- on confirmation of both contracts, channel is open
- players use this formula for moving state forward:
   - 1. Resting - current state, no changes
   - 2. Propose - Provide some stake value, and a hashed state update
   - 3. Accept - Other person provides their state update & accepts the stake allotment
   - 4. Reveal - Original person responds with hash salt, state raw value, and updates state allotment based on stake value
   - 5. Resting - Other person accepts the change by sending current state

Payment Channels:
- Prefund setup
- Funding
- Postfund setup
- Game/interactions
   - Library that uses pure functions only to validate proposed state change validity
- Conclusion

Research/Notes:
- CREATE2 
- counterfactual instantiation, allows lots of up front work to take place, and closing the channel upon disagreements and final state change

Hackathon Challenges:
- Celer: https://kauri.io/article/c769a1d405544dc18ae17f9189349da6/v2/celer-network-sponsor-bounty-at-ethdenver-2019!
- Blocknative: https://kauri.io/article/80219f341f3742b7b1529a3494d38576/v3/blocknative-sponsor-bounty-at-ethdenver-2019!
- Fortmatic: https://kauri.io/article/67292751c2334f78bd4c6d187dd64f50/v2/fortmatic-sponsor-bounty-at-ethdenver-2019!
- Portis: see gitcoin

# Impact Track - Increasing Emergency Preparedness
<a href="https://unstats.un.org/sdgs/indicators/Global%20Indicator%20Framework%20after%20refinement_Eng.pdf"> UN Global indicator framework for the Sustainable Development Goals & targets of the 2030 Agenda for Sustainable Development</a>

Goal 3. Ensure healthy lives and promote well-being for all at all ages
- 3.d Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks
   - 3.d.1 International Health Regulations (IHR) capacity and health emergency preparedness
   
   
During 2012 the United States launched the Wireless Emergency Alert (WEA) system, and it has acted as an essential part of population preparedness for natural disasters, imminent threats, and presidential alerts. International adoption of emergency systems has been slow due to government censorship, lack of economic incentive and underlying technology. 





