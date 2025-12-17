🌐 Suraj Kumar Sah – B.Tech CSE Student Portfolio
Welcome to the official repository of Suraj Kumar Sah, a B.Tech (Computer Science Engineering) student at Lovely Professional University, Punjab.
This project is a professional single-page portfolio website designed to showcase academic performance, technical skills, projects, certifications, and contact information in a clean and modern UI.

🚀 Project Purpose
This portfolio demonstrates:
* Frontend fundamentals (HTML, CSS, JavaScript)
* Clean project structuring
* Version control using Git & GitHub
* Deployment readiness using Docker
* Professional collaboration workflow (feature branches & PRs)

🖥️ Tech Stack
* HTML5 – Structure
* CSS3 – Dark theme UI & animations
* JavaScript (Vanilla) – Dynamic content rendering
* Git & GitHub – Version control & collaboration
* Docker (Optional) – Containerized deployment

📁 Project File Structure
surajkrsah-portfolio/
│
├── index.html      # Main website structure
├── port.css        # Styling (Dark theme + Snake Timeline)
├── port.js         # JavaScript (Dynamic academics section)
├── suraj.jpeg      # Profile image (required)
├── lpu1.png        # University logo (optional)
├── Dockerfile      # Docker deployment configuration
└── README.md       # Project documentation

🚀 Local Deployment (Without Docker)
1. Clone the repository git clone [https://github.com/suraj-kumar-shah/surajkrsah-portfilio.git](https://suraj-kumar-shah.github.io/surajkrsah-portfolio/)
2. cd surajkrsah-portfilio
3. 
4. Add required assets
    * Place suraj.jpeg and lpu1.png in the root folder
5. Run
    * Open index.html directly in your browser

🐳 Docker Deployment (Industry-Standard)
1️⃣ Build Docker Image
docker build -t suraj-portfolio .
2️⃣ Run Container
docker run -d -p 80:80 suraj-portfolio
3️⃣ Access Website
http://localhost
✔ This ensures consistent deployment across systems

🤝 Team Collaboration Workflow (GitHub)
This project follows industry-standard Git collaboration practices.
🔀 Branch Strategy
Branch	Purpose
main	Production (Live portfolio)
develop	Integration & testing
feature-*	Individual features
👨‍💻 Contribution Steps
1. Fork / Clone the repository
2. Create a feature branch: git checkout develop
3. git checkout -b feature-ui-update
4. 
5. Commit changes: git add .
6. git commit -m "Improve UI responsiveness"
7. 
8. Push branch: git push origin feature-ui-update
9. 
10. Open a Pull Request → develop
11. After review, merge into develop
12. Maintainer merges develop → main

⚠ Merge Conflict Handling
git pull origin develop
# resolve conflicts manually
git add .
git commit -m "Resolve merge conflict"
✔ Conflicts are normal in team projects

✨ Key Features
* 🌙 Dark Mode UI with burnt orange accent (#e16d3c)
* 🐍 Snake Timeline Design for skills & education
* 📊 Dynamic Academic Cards (semester-wise performance)
* 📱 Fully Responsive (Mobile & Desktop)
* ⚙ Deployment Ready (Docker support)

👤 Student Information
Field	Details
Name	Suraj Kumar Sah
Degree	B.Tech – Computer Science Engineering
University	Lovely Professional University, Punjab
Registration No.	12301776
CGPA	7.80
Email	surajshah72600@gmail.com
Mobile	+91 9508565909
LinkedIn	https://linkedin.com/in/surajkumarsah77
GitHub	https://github.com/suraj-kumar-shah
📌 Future Enhancements
* CI/CD using GitHub Actions
* Custom domain + HTTPS
* AWS / Cloud deployment
* Backend integration

📄 License
This project is for educational and personal portfolio use.

✅ Resume-Ready Line (Use This)
Developed and deployed a responsive personal portfolio website using HTML, CSS, JavaScript, Git, Docker, and GitHub following industry-standard collaboration and deployment practices.

