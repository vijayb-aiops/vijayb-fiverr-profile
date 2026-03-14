import { useState } from "react";

const SECTIONS = ["Profile Setup", "Algorithm Guide", "Positioning", "5 Specific Gigs", "3 Chain Gigs", "FAQ & Requirements", "Thumbnails", "30-Day Plan"];

// ── COPY BUTTON ──────────────────────────────────────────────
const CopyBtn = ({ text }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      style={{ position:"absolute", top:8, right:8, background: copied?"#1E6B3C":"#2E75B6", color:"white", border:"none", borderRadius:4, padding:"4px 10px", fontSize:11, cursor:"pointer", fontWeight:700, transition:"background 0.2s" }}>
      {copied ? "✓ Copied!" : "Copy"}
    </button>
  );
};

const CodeBlock = ({ children }) => (
  <div style={{ position:"relative", margin:"8px 0" }}>
    <pre style={{ background:"#F6F8FA", border:"1px solid #DDD", borderLeft:"4px solid #2E75B6", borderRadius:4, padding:"12px 48px 12px 14px", fontSize:12, lineHeight:1.65, whiteSpace:"pre-wrap", wordBreak:"break-word", margin:0, fontFamily:"Courier New, monospace", color:"#1A1A1A" }}>{children}</pre>
    <CopyBtn text={children} />
  </div>
);

const Card = ({ title, children, bg="#E8F4FD", border="#2E75B6", titleColor="#1F4E79" }) => (
  <div style={{ background:bg, border:`1px solid ${border}`, borderLeft:`4px solid ${border}`, borderRadius:6, padding:"12px 16px", margin:"10px 0" }}>
    {title && <div style={{ fontWeight:700, color:titleColor, fontSize:13, marginBottom:8 }}>{title}</div>}
    {children}
  </div>
);

const AlgoTip = ({ children }) => (
  <div style={{ background:"#FFF8E8", border:"1px solid #F0A500", borderLeft:"4px solid #F0A500", borderRadius:6, padding:"10px 14px", margin:"10px 0" }}>
    <span style={{ fontWeight:700, color:"#B8460B", fontSize:12 }}>⚡ FIVERR ALGORITHM TIP  </span>
    <span style={{ fontSize:12, color:"#1A1A1A" }}>{children}</span>
  </div>
);

const PkgTable = ({ rows }) => (
  <div style={{ overflowX:"auto", margin:"10px 0" }}>
    <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
      <thead>
        <tr>
          <th style={{ background:"#1F4E79", color:"white", padding:"8px 10px", textAlign:"left", width:"20%" }}></th>
          <th style={{ background:"#1F4E79", color:"white", padding:"8px 10px", textAlign:"center" }}>BASIC</th>
          <th style={{ background:"#2E75B6", color:"white", padding:"8px 10px", textAlign:"center" }}>STANDARD ⭐</th>
          <th style={{ background:"#1F4E79", color:"white", padding:"8px 10px", textAlign:"center" }}>PREMIUM</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, b, s, p], i) => (
          <tr key={i} style={{ background: i%2===0?"#F7FAFD":"white" }}>
            <td style={{ padding:"7px 10px", fontWeight:700, color:"#595959", fontSize:11, borderBottom:"1px solid #EEE" }}>{label}</td>
            <td style={{ padding:"7px 10px", textAlign:"center", borderBottom:"1px solid #EEE" }}>{b}</td>
            <td style={{ padding:"7px 10px", textAlign:"center", background:"#EEF5FB", borderBottom:"1px solid #EEE", fontWeight: label==="Price"?700:400, color: label==="Price"?"#1E6B3C":"inherit" }}>{s}</td>
            <td style={{ padding:"7px 10px", textAlign:"center", borderBottom:"1px solid #EEE", fontWeight: label==="Price"?700:400, color: label==="Price"?"#1E6B3C":"inherit" }}>{p}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Label = ({ k, v }) => (
  <div style={{ display:"flex", border:"1px solid #CCC", borderRadius:4, marginBottom:6, overflow:"hidden", fontSize:12 }}>
    <div style={{ background:"#D6E4F0", padding:"7px 10px", fontWeight:700, color:"#1F4E79", minWidth:110, display:"flex", alignItems:"center" }}>{k}</div>
    <div style={{ background:"#E8F4FD", padding:"7px 12px", flex:1 }}>{v}</div>
  </div>
);

const TwoCol = ({ leftTitle, rightTitle, leftBg, rightBg, leftColor, rightColor, left, right }) => (
  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, border:"1px solid #CCC", borderRadius:6, overflow:"hidden", margin:"10px 0", fontSize:12 }}>
    <div style={{ background:leftBg||"#D9EFE3", padding:"8px 12px", fontWeight:700, color:leftColor||"#1E6B3C" }}>{leftTitle}</div>
    <div style={{ background:rightBg||"#FDE9E9", padding:"8px 12px", fontWeight:700, color:rightColor||"#B8460B", borderLeft:"1px solid #CCC" }}>{rightTitle}</div>
    <div style={{ padding:"10px 12px", verticalAlign:"top" }}>
      {left.map((i,idx) => <div key={idx} style={{ marginBottom:5 }}>• {i}</div>)}
    </div>
    <div style={{ padding:"10px 12px", borderLeft:"1px solid #CCC" }}>
      {right.map((i,idx) => <div key={idx} style={{ marginBottom:5 }}>• {i}</div>)}
    </div>
  </div>
);

// ── FULL TECH STACK ─────────────────────────────────────────
const TECH_STACK = {
  "CI/CD & Automation": "Jenkins, GitHub Actions, GitLab CI/CD, Azure DevOps, GitHub Copilot, YAML, Groovy",
  "Cloud — AWS": "EC2, S3, IAM, Lambda, CloudFormation, Organizations, CloudWatch, SNS, SES, EventBridge, RDS, VPC",
  "Cloud — Azure": "AKS, App Services, Key Vault, ARM Templates, Azure DevOps, Azure AD",
  "Infrastructure as Code": "Terraform, Ansible, Ansible Tower, Helm Charts, CloudFormation, ARM Templates",
  "Containers & Orchestration": "Docker, Kubernetes (AKS, EKS, on-prem), Helm, Rancher, Pods, Deployments, Ingress",
  "Security & Compliance": "SonarQube, Fortify SSC/FoD/Web Inspect, GitHub Advanced Security, IAM, RBAC, Secret Rotation, Azure Key Vault, NexusIQ",
  "Monitoring & Observability": "Prometheus, Grafana, Alertmanager, ELK Stack, Dynatrace, AWS CloudWatch, Kibana",
  "Artifact Management": "JFrog Artifactory, Nexus, GitHub Packages",
  "Version Control & SCM": "Git, GitHub, GitHub EMU, GitLab, Bitbucket",
  "Scripting & Programming": "Python (Boto3), Bash/Shell, PowerShell, Groovy",
  "Operating Systems": "Linux (RHEL, Ubuntu, CentOS), Windows Server",
};

// ── PROFILE CONTENT ─────────────────────────────────────────
const HEADLINE = `DevOps Engineer | Docker · Kubernetes · AWS · Terraform · CI/CD | 7+ Years Enterprise Scale`;

const BIO = `DevOps problems slow teams down, drain budgets, and kill deployments. I fix them — fast, cleanly, and with clear documentation so your team understands what changed and why.

I'm a DevOps Engineer with 7+ years of enterprise experience at PointClickCare (healthcare SaaS, 1,500+ users) and Deloitte (50+ AWS accounts, global consulting). I've automated cloud infrastructure, rebuilt broken CI/CD pipelines, debugged Kubernetes clusters under production pressure, and cut AWS costs by tens of thousands of dollars — at real companies, not just side projects.

What I help you with:
🐳 Docker — build errors, image optimization, Compose issues
☸️ Kubernetes — CrashLoopBackOff, pod failures, Helm chart fixes
☁️ AWS — cost reduction, IAM, EC2/RDS/EKS, multi-account governance
🔄 CI/CD — GitHub Actions, Jenkins, GitLab CI pipeline setup & repair
🏗️ Terraform — production-ready IaC modules, state errors, AWS/Azure
🔐 Security — SonarQube, Fortify, secret rotation, RBAC, GitHub Advanced Security
📊 Monitoring — Prometheus, Grafana, ELK Stack, Dynatrace, Alertmanager
🔗 Full DevOps Chain — end-to-end pipeline from code to cloud

My track record:
• Reduced Jenkins pipeline failures by 30% at PointClickCare
• Automated governance across 50+ AWS accounts at Deloitte
• Cut release cycle duration 25% through Helm standardization
• Deployed Dynatrace across 100+ Azure App Services via PowerShell automation
• Enforced SonarQube + Fortify security gates blocking vulnerable code pre-deployment
• Built 7 AI-powered DevOps tools — see my GitHub portfolio

Portfolio: github.com/[your-username]
YouTube: [channel link] — watch me build and demo these tools

I respond within 1 hour. Message me before ordering if you want to discuss your situation first.`;

const VIDEO_SCRIPT = `[0:00–0:10] HOOK — look at camera
"If your Docker container is crashing, your Kubernetes pods won't start, or your CI/CD pipeline broke at 3pm on a Friday — I'm the person you call."

[0:10–0:25] WHO YOU ARE
"I'm Vijaya, a DevOps Engineer with 7 years of enterprise experience at PointClickCare and Deloitte — where I managed Kubernetes at scale, automated AWS governance across 50 accounts, and fixed hundreds of broken pipelines under real production pressure."

[0:25–0:45] WHAT YOU OFFER — show GitHub on screen
"On Fiverr I offer both targeted fixes — Docker, Kubernetes, AWS, Terraform, CI/CD, security scanning, monitoring — and full DevOps chain services where I set up your entire pipeline from code to cloud. Every delivery comes with documentation, root-cause explanation, and post-delivery support."

[0:45–0:60] PROOF — show a project on screen
"I've also built 7 AI-powered DevOps tools — you can see them on my GitHub and watch demos on my YouTube channel. These show how I approach DevOps problems at a deeper level."

[0:60–0:75] CTA
"Browse my gigs, message me if you have questions, and let's get your infrastructure working the way it should. I respond within one hour."`;

// ── GIG DESCRIPTIONS ─────────────────────────────────────────
const GIGS_SPECIFIC = [
  {
    id: 0, emoji: "🐳", label: "GIG 1 — Docker Troubleshooting",
    title: "I will fix your Docker container errors and optimize your Dockerfile",
    tags: "docker · dockerfile · docker-compose · containers · devops",
    desc: `🚀 LAUNCH SPECIAL: 50% OFF for first 10 clients

Docker container crashing? Build failing? Compose networking broken? These issues block your entire team — I diagnose and fix them fast.

What I fix:
✅ Docker build errors (layer failures, missing dependencies, base image issues)
✅ Container runtime crashes (exit codes, entrypoint failures, env vars)
✅ Docker Compose networking, volumes, and service dependency issues
✅ Dockerfile optimization — reduce image size by 50%+ with multi-stage builds
✅ Docker registry authentication and private image issues
✅ Docker networking between containers and host

How I work:
1. You share your Dockerfile, Compose file, and error output
2. I reproduce the issue in a clean environment
3. I apply the fix and test end-to-end
4. I deliver: fixed config + root-cause explanation + prevention notes

Why choose me:
• 7+ years Docker at enterprise scale — PointClickCare, Deloitte, Roche
• Reduced container-related deployment failures by 30% at PointClickCare
• Deep stack: Docker, Docker Compose, ECR, multi-stage builds, Docker networking
• Built AI Docker Security Scanner — github.com/[username]
• Demo videos: youtube.com/[channel]

I respond within 1 hour. Let's fix it.`,
    pkg: [["Package","Quick Fix","Full Debug","Deep Audit"],["Includes","1 issue + fix + explanation","Up to 3 issues + optimization + docs","Full audit + all fixes + best practices guide"],["Price","$35","$60","$90"],["Delivery","1 day","2 days","3 days"],["Revisions","1","2","Unlimited"],["Support","3 days","5 days","7 days"]]
  },
  {
    id: 1, emoji: "☸️", label: "GIG 2 — Kubernetes Pod Debugging",
    title: "I will debug Kubernetes pod failures and fix CrashLoopBackOff fast",
    tags: "kubernetes · k8s · crashloopbackoff · pods · helm",
    desc: `🚀 LAUNCH SPECIAL: 50% OFF for first 10 clients

CrashLoopBackOff. ImagePullBackOff. OOMKilled. Pending forever. Kubernetes errors stop production — I find the root cause and fix it.

What I debug and fix:
✅ CrashLoopBackOff — entrypoint failures, bad configs, missing dependencies
✅ ImagePullBackOff — registry auth, private repos, incorrect image tags
✅ OOMKilled — resource limit right-sizing, memory leak identification
✅ Pending pods — node affinity, taints, PVC issues, insufficient cluster resources
✅ Helm chart deployment failures and template errors
✅ Service, Ingress, and networking misconfigurations
✅ Init container failures and multi-container pod issues

How I work:
1. You share pod describe output, logs, and events
2. I trace root cause through the full Kubernetes stack
3. I apply fix and validate in your cluster
4. I deliver: fix + plain-English explanation + prevention checklist

Why choose me:
• Maintained K8s on AKS for 1,500+ users at PointClickCare
• Cut release cycle 25% through Helm chart standardization
• Experienced: AKS, EKS, on-prem K8s, Rancher, Helm, Ingress, PVC
• Built AI Kubernetes Debugger — github.com/[username]

I respond within 1 hour.`,
    pkg: [["Package","Pod Fix","Multi-Pod","Cluster Audit"],["Includes","Single pod failure + fix","Up to 5 pods + root cause + Helm fix","Full cluster audit + all fixes + prevention guide"],["Price","$50","$85","$130"],["Delivery","1 day","2 days","3 days"],["Revisions","1","2","Unlimited"],["Support","3 days","5 days","7 days"]]
  },
  {
    id: 2, emoji: "☁️", label: "GIG 3 — AWS Cost Optimization",
    title: "I will analyze your AWS bill and find hidden cost savings with report",
    tags: "aws · cost optimization · cloud cost · aws billing · ec2",
    desc: `🚀 LAUNCH SPECIAL: 50% OFF for first 10 clients

Your AWS bill has waste in it. Unused EC2 instances, over-provisioned RDS, forgotten Elastic IPs, idle NAT Gateways. I find it all and show you exactly how much you can save.

What I deliver:
✅ Full AWS Cost Explorer analysis — service-by-service breakdown
✅ Unused resource identification — EC2, RDS, EBS, EIPs, NAT Gateways, LBs
✅ Right-sizing recommendations with exact dollar savings
✅ Reserved Instance / Savings Plan opportunity analysis
✅ S3 storage class optimization
✅ Tagging audit for accurate cost allocation
✅ Prioritized savings roadmap — quick wins first

Real results:
• Automated cost governance across 50+ AWS accounts at Deloitte
• Improved tagging compliance by 40% — gave finance full visibility
• Built AI AWS Cost Detective — identified $900+/year savings in testing

How it works:
1. You give me read-only Cost Explorer access (I never modify your environment)
2. I run full analysis within agreed timeframe
3. You receive detailed PDF/Google Doc report
4. Premium: I walk you through findings on a live 30-min call

Typical outcome: $300–$2,000/month in savings identified.`,
    pkg: [["Package","Quick Scan","Full Report","Deep Dive"],["Includes","Top 10 savings opportunities + report","Complete audit + roadmap + tagging review","Full audit + implementation guide + 30-min call"],["Price","$60","$110","$170"],["Delivery","2 days","3 days","5 days"],["Revisions","1","2","Unlimited"],["Support","3 days","5 days","7 days"]]
  },
  {
    id: 3, emoji: "🔄", label: "GIG 4 — CI/CD Pipeline Fix & Setup",
    title: "I will fix your GitHub Actions or Jenkins CI/CD pipeline failures",
    tags: "github actions · cicd · jenkins · pipeline · devops",
    desc: `🚀 LAUNCH SPECIAL: 50% OFF for first 10 clients

Broken CI/CD pipeline? Failed workflows? Build passing locally but failing in Actions? I've fixed every variation of this problem.

What I fix or build:
✅ GitHub Actions workflow failures — YAML errors, secrets, runner issues
✅ Jenkins pipeline repair — Groovy scripts, shared libraries, agent provisioning
✅ GitLab CI/CD debugging and optimization
✅ Azure DevOps pipeline setup and troubleshooting
✅ Docker build + push stages in pipelines
✅ Kubernetes deployment automation (kubectl, Helm, ArgoCD)
✅ Secrets management (GitHub Secrets, AWS Parameter Store, Azure Key Vault)
✅ Pipeline optimization — cut build times 30–50%

Why choose me:
• Reduced Jenkins pipeline failures by 30% at PointClickCare
• Automated CI/CD across 200+ GitHub repos via Jenkins pipelines
• Automated secret rotation using GitHub Actions at enterprise scale
• Stack: GitHub Actions, Jenkins, GitLab CI, Azure DevOps, ArgoCD, Groovy, YAML
• Built AI GitHub Actions Healer — github.com/[username]

I deliver working, documented pipelines — not just fixes.`,
    pkg: [["Package","Fix It","Build It","Pro Pipeline"],["Includes","Diagnose + fix single broken workflow","Full pipeline (build/test/deploy) + docs","Advanced pipeline + K8s deploy + Secrets + optimization"],["Price","$45","$90","$140"],["Delivery","1 day","3 days","5 days"],["Revisions","1","2","Unlimited"],["Support","3 days","5 days","7 days"]]
  },
  {
    id: 4, emoji: "🏗️", label: "GIG 5 — Terraform IaC",
    title: "I will write or fix production-ready Terraform modules for AWS or Azure",
    tags: "terraform · infrastructure as code · aws · iac · terraform modules",
    desc: `🚀 LAUNCH SPECIAL: 50% OFF for first 10 clients

Need clean Terraform code your whole team can maintain? State errors breaking your deployments? I write production-ready IaC — not spaghetti configs.

What I deliver:
✅ Production-ready Terraform modules — VPC, EC2, RDS, EKS, IAM, S3, AKS
✅ Remote state setup — S3 backend + DynamoDB locking
✅ Terraform state error debugging and repair
✅ Environment separation — dev/staging/prod (workspaces or directories)
✅ Security best practices — least privilege IAM, encryption, secrets
✅ Variables, outputs, and full README documentation
✅ Passes terraform validate and terraform plan clean on delivery

Also experienced with:
• Ansible & Ansible Tower for configuration management
• AWS CloudFormation stacks and nested stacks
• Azure ARM Templates

Why choose me:
• Provisioned CI/CD agents and infrastructure at PointClickCare with Terraform + Ansible
• Standardized VPC/IAM/logging stacks across all Deloitte client engagements
• Built AI Terraform Generator — github.com/[username]

You get code that passes terraform plan clean on delivery.`,
    pkg: [["Package","Fix / Debug","Module Build","Full IaC Stack"],["Includes","Terraform errors + state repair + explanation","1–3 modules + variables + outputs + README","Full env (VPC, compute, DB, IAM) + docs + review"],["Price","$55","$110","$180"],["Delivery","2 days","4 days","7 days"],["Revisions","1","2","Unlimited"],["Support","3 days","5 days","7 days"]]
  },
];

const GIGS_CHAIN = [
  {
    id: 5, emoji: "🔗", label: "CHAIN GIG 1 — Full DevOps Pipeline (Code to Cloud)",
    title: "I will build your complete DevOps pipeline from Docker to Kubernetes",
    tags: "devops pipeline · kubernetes · docker · cicd · cloud deployment",
    desc: `🚀 LAUNCH SPECIAL: 50% OFF for first 5 clients

You need your application to go from code commit to cloud deployment automatically, reliably, every time. That's what I build.

The full pipeline:
✅ STEP 1 — Docker: Containerize your app with optimized, multi-stage Dockerfile
✅ STEP 2 — CI/CD: Automated build, test, and image push (GitHub Actions or Jenkins)
✅ STEP 3 — Registry: Push to Docker Hub, ECR, or ACR
✅ STEP 4 — Kubernetes: Deploy to AKS, EKS, or on-prem K8s with Helm charts
✅ STEP 5 — Secrets: Vault, GitHub Secrets, or Azure Key Vault integration
✅ STEP 6 — Monitoring: Basic Prometheus + Grafana so you can see what's happening

What you get:
📄 Working pipeline — commits trigger automated deployments
📄 Full documentation — your team can maintain it without me
📄 Rollback procedure — what to do when a deployment fails
📄 Security gates — SonarQube or GitHub Advanced Security scan included (Premium)

Why choose me:
• Built and maintained this exact stack at PointClickCare for 1,500+ users
• Full stack: Docker, GitHub Actions/Jenkins, Helm, AKS/EKS, Prometheus, Grafana
• 7+ years running this end-to-end at enterprise scale

Stack options: Docker + GitHub Actions + AKS/EKS + Helm (or Jenkins — your choice)`,
    pkg: [["Package","Starter Pipeline","Full Pipeline","Enterprise Pipeline"],["Includes","Docker + CI/CD + basic K8s deploy","Complete chain + Helm + Secrets + monitoring","Full chain + multi-env + security scanning + docs"],["Price","$200","$380","$600"],["Delivery","5 days","7 days","10 days"],["Revisions","2","3","Unlimited"],["Support","7 days","10 days","14 days"]]
  },
  {
    id: 6, emoji: "☁️🏗️", label: "CHAIN GIG 2 — AWS Infrastructure with Terraform",
    title: "I will build and deploy your AWS infrastructure using Terraform IaC",
    tags: "aws infrastructure · terraform · iac · aws setup · cloud architecture",
    desc: `🚀 LAUNCH SPECIAL: 50% OFF for first 5 clients

Need your AWS infrastructure built properly — not just working, but secure, scalable, and maintainable as your team grows?

What I build:
✅ VPC — subnets, route tables, NAT gateway, security groups
✅ Compute — EC2 auto-scaling groups or EKS cluster
✅ Database — RDS (multi-AZ option) with encryption and automated backups
✅ Storage — S3 buckets with lifecycle policies and versioning
✅ IAM — least-privilege roles and policies, RBAC
✅ Secrets — AWS Secrets Manager or Parameter Store integration
✅ Monitoring — CloudWatch alarms + SNS notifications
✅ Everything as Terraform — version-controlled, repeatable, auditable

Environment options:
• Single environment (dev or prod)
• Dev + staging + prod with full separation
• Multi-account setup (separate AWS accounts per environment)

Why choose me:
• Standardized AWS infrastructure across all Deloitte client engagements
• Automated AWS account provisioning — reduced onboarding from days to minutes
• Designed cross-account IAM architecture for 100+ AWS sub-accounts
• Full stack: Terraform, Ansible, CloudFormation, AWS Organizations, IAM, VPC, EKS, RDS

You get: working AWS infrastructure + all Terraform code + README + architecture diagram (Premium)`,
    pkg: [["Package","Core Infra","Full Stack","Production Ready"],["Includes","VPC + EC2/EKS + S3 + IAM + Terraform","Core + RDS + Secrets + CloudWatch + multi-env","Full stack + multi-account + security audit + diagram"],["Price","$250","$450","$700"],["Delivery","5 days","7 days","10 days"],["Revisions","2","3","Unlimited"],["Support","7 days","10 days","14 days"]]
  },
  {
    id: 7, emoji: "🔍", label: "CHAIN GIG 3 — DevOps Audit & Roadmap",
    title: "I will audit your DevOps stack and deliver a prioritized fix roadmap",
    tags: "devops audit · devops consulting · cloud audit · infrastructure review · devops assessment",
    desc: `🚀 LAUNCH SPECIAL: 50% OFF for first 5 clients

Not sure why deployments keep breaking? Spending too much on cloud? Worried your infrastructure isn't secure? I'll review your entire DevOps stack and tell you exactly what to fix and in what order.

What I audit:
✅ CI/CD pipelines — reliability, speed, security gaps (GitHub Actions, Jenkins, GitLab)
✅ Container setup — Docker and Kubernetes configuration and best practices
✅ AWS/Azure infrastructure — architecture, cost, security, IAM, RBAC
✅ IaC (Terraform/Ansible/CloudFormation) — structure, drift, best practices
✅ Monitoring and alerting — Prometheus, Grafana, ELK, Dynatrace gaps
✅ Security posture — SonarQube, Fortify, secret management, RBAC, key rotation
✅ Artifact management — JFrog Artifactory, Nexus configuration
✅ Observability — logging (ELK/Kibana), metrics, alerting coverage

What you get:
📄 Full audit report — current state, risks, and findings
📄 Prioritized roadmap — what to fix first, what can wait
📄 Quick wins list — things you can fix this week for immediate impact
📄 Premium: 60-min walkthrough call + implementation Q&A session

Why choose me:
• Reduced incident response time 40% at PointClickCare through monitoring improvements
• Enforced SonarQube + Fortify security gates blocking vulnerable code pre-deployment
• 7 years seeing what breaks at scale across healthcare SaaS and global consulting
• I only need read access — zero risk to your environment`,
    pkg: [["Package","Focused Audit","Full Audit","Audit + Call"],["Includes","1 area audit (CI/CD or K8s or AWS) + report","Complete stack audit + prioritized roadmap","Full audit + 60-min walkthrough + Q&A doc"],["Price","$150","$280","$420"],["Delivery","3 days","5 days","7 days"],["Revisions","1","2","Unlimited"],["Support","5 days","7 days","14 days"]]
  },
];

// ── FAQ ──────────────────────────────────────────────────────
const FAQS = [
  { q: "What if you can't fix my issue?", a: "If I genuinely cannot resolve your problem after a thorough attempt, I offer a full refund. This is rare — I will message you before accepting an order if I think it's outside my scope." },
  { q: "Do I need to give you access to my systems?", a: "For debugging gigs, yes — SSH, kubeconfig, or AWS read-only credentials. All credentials are used only for your project and deleted after delivery. I never make changes without telling you first." },
  { q: "How quickly can you start?", a: "Within a few hours of receiving your order requirements. For urgent issues, message me before ordering and I'll prioritize you. I respond within 1 hour." },
  { q: "What technologies do you work with?", a: "Jenkins, GitHub Actions, GitLab CI, Azure DevOps, Docker, Kubernetes (AKS/EKS/on-prem), AWS, Azure, Terraform, Ansible, Helm, SonarQube, Fortify, Prometheus, Grafana, ELK Stack, Dynatrace, JFrog Artifactory, Python, Bash, PowerShell, Groovy. Message me if your stack isn't listed." },
  { q: "Can you handle security scanning and compliance?", a: "Yes — SonarQube, Fortify SSC/FoD/Web Inspect, GitHub Advanced Security, NexusIQ, RBAC, secret rotation, and Azure Key Vault are all in my stack from real enterprise work." },
  { q: "What if I need more revisions?", a: "Additional revisions are $15 each, or upgrade to Premium for unlimited. I aim to get it right the first time — revisions are rare." },
  { q: "Can I talk to you before ordering?", a: "Yes — message me first. I'd rather spend 5 minutes understanding your situation than have you order the wrong package." },
];

const REQS = [
  { gig: "Docker & CI/CD Gigs", items: ["Describe the issue in detail — what are you trying to do, and what error are you seeing?", "Paste the full error message or screenshot", "Share your Dockerfile and/or docker-compose.yml (paste or attach)", "What base image and Docker/CI tool version are you using?", "What is your environment — local, cloud, CI runner?", "Is this urgent? What's your deadline?"] },
  { gig: "Kubernetes Gigs", items: ["Paste the output of: kubectl describe pod [pod-name] -n [namespace]", "Paste the output of: kubectl logs [pod-name] --previous (if applicable)", "What K8s distribution? (AKS, EKS, on-prem, Rancher)", "Are you using Helm? If yes, share values.yaml", "How many pods/deployments are affected?", "When did this start? What changed before it broke?"] },
  { gig: "AWS Cost & Infrastructure Gigs", items: ["Create a read-only IAM user with Billing/Cost Explorer access and share via encrypted message", "What is your approximate monthly AWS spend?", "Which AWS services do you use most? (EC2, RDS, S3, Lambda, EKS, etc.)", "Do you have multiple AWS accounts? If yes, how many?", "Main goal — reduce cost, improve security, or both?", "Do you have an existing tagging strategy?"] },
  { gig: "Terraform / Ansible / IaC Gigs", items: ["Describe exactly what you need built or fixed", "Cloud provider? (AWS, Azure, GCP)", "If fixing: paste the full Terraform/Ansible error message", "If building: describe your target architecture and environments needed", "Share existing IaC files if applicable (zip and attach)", "Do you use remote state? Where? (S3, Terraform Cloud, Azure Storage)"] },
  { gig: "DevOps Audit Gig", items: ["Which areas concern you most? (CI/CD, K8s, AWS cost, security, monitoring)", "What cloud provider(s) are you using?", "Approximate team size and number of services/microservices", "Do you currently have monitoring? (Prometheus, Datadog, Dynatrace, etc.)", "What is prompting the audit? (incident, growth, compliance, cost)", "Preferred report format: PDF or Google Doc?"] },
];

// ── THUMBNAILS ───────────────────────────────────────────────
const THUMBS = [
  { gig:"Docker", l1:"Docker Broken?", l2:"I'll Fix It Fast", sub:"Container Errors · Dockerfile · Compose", icons:"Docker whale icon" },
  { gig:"Kubernetes", l1:"K8s Pod Failing?", l2:"Root Cause Found", sub:"CrashLoop · ImagePull · OOMKilled · Helm", icons:"K8s wheel icon" },
  { gig:"AWS Cost", l1:"AWS Overcharging?", l2:"Find the Waste", sub:"Cost Report · Savings Roadmap · Read-Only", icons:"AWS smile icon" },
  { gig:"CI/CD", l1:"Pipeline Broken?", l2:"Back Online Fast", sub:"GitHub Actions · Jenkins · GitLab · Azure DevOps", icons:"GitHub + Jenkins icons" },
  { gig:"Terraform", l1:"Clean Terraform", l2:"Production Ready", sub:"Modules · State · AWS · Azure · Ansible", icons:"Terraform icon" },
  { gig:"Full Pipeline", l1:"Code → Cloud", l2:"Full Pipeline Setup", sub:"Docker · CI/CD · Kubernetes · End-to-End", icons:"All icons in a row" },
  { gig:"AWS Infra", l1:"AWS Built Right", l2:"With Terraform", sub:"VPC · EC2 · RDS · IAM · IaC", icons:"AWS + Terraform icons" },
  { gig:"DevOps Audit", l1:"DevOps Audit", l2:"Fix What Matters", sub:"Full Stack Review · Prioritized Roadmap", icons:"Magnifying glass icon" },
];

// ── 30-DAY PLAN ───────────────────────────────────────────────
const WEEKS = [
  { label:"WEEK 1 — LAUNCH", bg:"#D6E4F0", metric:"Target: 3–6 orders | 0% cancellation | 100% response rate",
    daily:["Enable Fiverr app notifications — reply to EVERY message within 1 hour","Send 10 buyer request offers/day (5 at 8am, 5 at 8pm)"],
    weekly:["Day 1–2: Complete profile 100% → publish all 8 gigs in one session","Day 1: Post LinkedIn launch announcement with Fiverr link","Day 2: Post on r/forhire with full service list + link","Day 3: Ask 10 people in network if they need DevOps help (offer first job free for a review)","Day 4: Twitter/X launch tweet — pin to profile","Day 5: Check gig analytics — which got impressions on day 1?","Day 6–7: Deliver early orders using delivery templates — request reviews 24h after"] },
  { label:"WEEK 2 — BUILD REVIEWS", bg:"#D9EFE3", metric:"Target: 8–14 total orders | First 5-star reviews appearing",
    daily:["10 buyer request offers/day","Reply within 1 hour to all messages","Send review request 24h after every delivery"],
    weekly:["LinkedIn value post — Docker or K8s tip + soft CTA to your gig","Check CTR per gig — which thumbnails get clicks? Redesign lowest performer","Refine weakest gig description based on what buyers are asking","Deliver all orders early — 2 hours early gets mentioned in reviews","Once you hit 5 reviews: update all gig descriptions to include '5 5-star reviews'"] },
  { label:"WEEK 3 — OPTIMIZE", bg:"#FFF8E8", metric:"Target: 15–22 total orders | Algorithm sending first organic traffic",
    daily:["10 buyer request offers/day","Monitor Fiverr analytics: impressions, clicks, orders by gig"],
    weekly:["Identify your 2 best-performing gigs — write LinkedIn posts specifically about those topics","Raise Basic price on best-performing gig by $10–15 (test algorithm response)","Join r/devops, r/kubernetes, r/aws — answer questions helpfully, mention Fiverr in your profile","Write a Dev.to article about one AI project — link your most relevant Fiverr gig at the end","Consider adding a 6th specific gig targeting a new keyword (monitoring setup, Ansible, ELK Stack)"] },
  { label:"WEEK 4 — SCALE", bg:"#D6E4F0", metric:"Target: 20–30 total orders | $800–$2,000 earned | Organic traffic daily",
    daily:["10 buyer request offers/day","Continue <1 hour reply time"],
    weekly:["10+ reviews now — raise ALL Basic prices by $15–20, remove 'LAUNCH SPECIAL' banners","Replace launch banners with: 'Trusted by [X] clients | 5.0 ⭐ rating'","Consider Fiverr Promoted Gigs (paid) for your top 2 specific gigs","Request a LinkedIn recommendation from a current colleague or manager","Update chain gig descriptions based on real questions buyers asked in weeks 1–3","Analyse which tech in your stack (Dynatrace? ELK? Fortify?) has low Fiverr competition — create a niche gig"] },
];

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function FiverrKitV2() {
  const [active, setActive] = useState(0);
  const [openGig, setOpenGig] = useState(null);

  const tab = (i) => ({
    padding:"8px 13px", cursor:"pointer", fontSize:11.5, fontWeight:600,
    color: active===i?"#1F4E79":"#595959", background:"none", border:"none",
    borderBottom: active===i?"3px solid #2E75B6":"3px solid transparent", whiteSpace:"nowrap"
  });

  return (
    <div style={{ fontFamily:"Arial, sans-serif", maxWidth:920, margin:"0 auto", background:"#FAFBFC", minHeight:"100vh" }}>
      {/* Header */}
      <div style={{ background:"linear-gradient(135deg, #1F4E79 0%, #2E75B6 100%)", color:"white", padding:"18px 24px 12px" }}>
        <div style={{ fontSize:20, fontWeight:800, letterSpacing:-0.5 }}>VIJAYA B — FIVERR KIT v2  <span style={{ background:"rgba(255,255,255,0.2)", borderRadius:12, padding:"2px 10px", fontSize:12, fontWeight:600, marginLeft:6 }}>Profile-First · Algorithm-Optimized</span></div>
        <div style={{ fontSize:11.5, opacity:0.85, marginTop:4 }}>Specialist Positioning · 5 Specific Gigs · 3 Chain Gigs · Full Tech Stack · 30-Day Growth Plan</div>
        <div style={{ display:"flex", gap:8, marginTop:10, flexWrap:"wrap" }}>
          {["7+ yrs Enterprise","PointClickCare + Deloitte","8 Gigs Total","Full Stack Reflected"].map(t => (
            <span key={t} style={{ background:"rgba(255,255,255,0.18)", borderRadius:20, padding:"2px 10px", fontSize:11, fontWeight:600 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background:"white", borderBottom:"1px solid #E0E0E0", overflowX:"auto", display:"flex" }}>
        {SECTIONS.map((s,i) => <button key={i} style={tab(i)} onClick={() => setActive(i)}>{s}</button>)}
      </div>

      <div style={{ padding:"20px 24px" }}>

        {/* ── TAB 0: PROFILE SETUP ── */}
        {active===0 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>Fiverr Profile Setup — Complete Before Publishing Any Gigs</div>
            <AlgoTip>Profile completeness directly affects whether Fiverr promotes you in the first 30 days. A 100% complete profile before your first gig = higher starting rank in search results.</AlgoTip>

            <div style={{ marginTop:16, marginBottom:8, fontWeight:700, color:"#1F4E79", fontSize:14 }}>1A — Headline (160 chars max)</div>
            <CodeBlock>{HEADLINE}</CodeBlock>
            <div style={{ fontSize:11, color:"#595959", marginBottom:12 }}>✓ Front-loads "DevOps Engineer" — top searched term &nbsp;|&nbsp; ✓ 5 tech keywords, each indexed separately &nbsp;|&nbsp; ✓ "7+ Years Enterprise Scale" = instant credibility &nbsp;|&nbsp; ✓ Under 160 chars</div>

            <div style={{ marginBottom:8, fontWeight:700, color:"#1F4E79", fontSize:14 }}>1B — Full Profile Bio (600 words max — copy-paste ready)</div>
            <CodeBlock>{BIO}</CodeBlock>

            <div style={{ marginBottom:8, marginTop:16, fontWeight:700, color:"#1F4E79", fontSize:14 }}>1C — Skills (Add All 15 — in this order)</div>
            <AlgoTip>Each skill is a searchable tag. Fiverr uses your skills list to match your profile to buyer searches beyond just your gig titles. Order matters — put highest-demand skills first.</AlgoTip>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6, margin:"10px 0" }}>
              {[["1","Docker"],["2","Kubernetes"],["3","AWS"],["4","Terraform"],["5","DevOps"],["6","CI/CD"],["7","Jenkins"],["8","GitHub Actions"],["9","Linux"],["10","Python"],["11","SonarQube"],["12","Ansible"],["13","Prometheus"],["14","Grafana"],["15","Azure"]].map(([n,s]) => (
                <div key={n} style={{ background:"#E8F4FD", border:"1px solid #C8DFF0", borderRadius:4, padding:"6px 10px", fontSize:12, display:"flex", gap:8 }}>
                  <span style={{ fontWeight:700, color:"#2E75B6", minWidth:20 }}>{n}.</span><span>{s}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:8, marginTop:16, fontWeight:700, color:"#1F4E79", fontSize:14 }}>1D — Your Full Tech Stack (reference for gig descriptions)</div>
            <div style={{ fontSize:11, color:"#595959", marginBottom:8 }}>Use these when buyers ask "do you work with X" — you have a deep, wide stack. Sprinkle relevant tools into gig descriptions naturally.</div>
            <div style={{ border:"1px solid #D0E4F4", borderRadius:6, overflow:"hidden" }}>
              {Object.entries(TECH_STACK).map(([cat, tools], i) => (
                <div key={cat} style={{ display:"flex", borderBottom: i < Object.keys(TECH_STACK).length-1?"1px solid #E0EEF8":"none", fontSize:12 }}>
                  <div style={{ background: i%2===0?"#D6E4F0":"#E8F4FD", padding:"8px 12px", minWidth:170, fontWeight:700, color:"#1F4E79", fontSize:11 }}>{cat}</div>
                  <div style={{ padding:"8px 12px", flex:1, color:"#1A1A1A" }}>{tools}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:8, marginTop:16, fontWeight:700, color:"#1F4E79", fontSize:14 }}>1E — Linked Accounts</div>
            {[["GitHub","MUST link — your 7 AI projects are your portfolio. Buyers click this before ordering."],["LinkedIn","Shows PointClickCare + Deloitte experience. Instant trust signal."],["YouTube","Even at 260 views, a demo channel signals professionalism and depth."],["Certifications","Add AWS, CKA/CKAD, Terraform, or any other certs you hold."],["Education","BSc Electronics Engineering + Leadership Management PG Certificate."]].map(([k,v]) => <Label key={k} k={k} v={v} />)}

            <div style={{ marginBottom:8, marginTop:16, fontWeight:700, color:"#1F4E79", fontSize:14 }}>1F — Profile Video Script (75 seconds — boosts conversion 40%)</div>
            <CodeBlock>{VIDEO_SCRIPT}</CodeBlock>
          </div>
        )}

        {/* ── TAB 1: ALGORITHM GUIDE ── */}
        {active===1 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>How the Fiverr Algorithm Works</div>
            <Card bg="#E8F4FD">
              <div style={{ fontSize:12 }}>Fiverr's algorithm ("Gig Rank") decides whether you appear on page 1 or page 50. As a new seller you get an invisible 30-day boost — clean metrics during this window keep you promoted. Dirty metrics (cancellations, slow replies) = buried for months.</div>
            </Card>
            <div style={{ overflowX:"auto", margin:"14px 0" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead>
                  <tr style={{ background:"#1F4E79", color:"white" }}>
                    {["Factor","Weight","What It Measures","How You Win"].map(h => <th key={h} style={{ padding:"9px 10px", textAlign:"left", fontWeight:700 }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Gig Click-Through Rate","🔴 Very High","How many buyers click your gig in search results","Strong thumbnail with clear benefit text. Specific title. Competitive launch price."],
                    ["Order Completion Rate","🔴 Very High","% of orders completed without cancellation","Never cancel. Clarify scope before buyer orders. Message first if unsure."],
                    ["Response Rate & Time","🟠 High","How fast and often you reply to messages","Reply within 1 hour always. Even 'Got it, reviewing now' counts as a response."],
                    ["Review Score & Volume","🟠 High","Average star rating and total review count","Over-deliver every order. Request reviews 24h after delivery."],
                    ["Gig Keywords","🟠 High","Keywords in title, description, and tags matching buyer searches","Use exact buyer language. Research Fiverr autocomplete. See each gig's keyword strategy."],
                    ["Profile Completeness","🟡 Medium","% of profile fields filled — photo, bio, skills, links","100% complete before publishing first gig. Video adds extra boost."],
                    ["Buyer Satisfaction Score","🟡 Medium","Private metric: reviews + repeat buyers + tips combined","Deliver above expectations. Documentation, speed, and follow-up all feed this."],
                    ["Gig Recency / Activity","🟡 Medium","How recently your gig had activity — orders, messages, edits","Send buyer requests daily. Edit gig descriptions monthly to signal activity."],
                  ].map(([f,w,m,h], i) => (
                    <tr key={i} style={{ background: i%2===0?"#F7FAFD":"white" }}>
                      <td style={{ padding:"8px 10px", fontWeight:700, color:"#1F4E79", borderBottom:"1px solid #EEE" }}>{f}</td>
                      <td style={{ padding:"8px 10px", borderBottom:"1px solid #EEE", whiteSpace:"nowrap" }}>{w}</td>
                      <td style={{ padding:"8px 10px", color:"#595959", borderBottom:"1px solid #EEE" }}>{m}</td>
                      <td style={{ padding:"8px 10px", borderBottom:"1px solid #EEE" }}>{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <AlgoTip>The single fastest way to climb the algorithm as a new seller: maintain 100% response rate AND 100% order completion rate in your first 30 days. These two metrics alone will keep Fiverr promoting you through the new seller window.</AlgoTip>
            <Card title="Keywords to Use in Every Gig (Fiverr buyer search terms)" bg="#E8F4FD" border="#2E75B6">
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginTop:4 }}>
                {[["High Volume","docker, kubernetes, aws, devops, terraform, ci/cd"],["Medium Volume","github actions, jenkins pipeline, helm charts, gitlab ci, ansible"],["Problem-Based","crashloopbackoff, terraform state error, docker build error, pod failure, oomkilled"],["Outcome-Based","reduce aws cost, fix pipeline, kubernetes debugging, cicd automation, infrastructure as code"]].map(([cat, words]) => (
                  <div key={cat}>
                    <div style={{ fontWeight:700, color:"#1F4E79", fontSize:11, marginBottom:4 }}>{cat}</div>
                    <div style={{ fontSize:11, color:"#595959", lineHeight:1.8 }}>{words.split(", ").map((w,i) => <span key={i} style={{ display:"block" }}>• {w}</span>)}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* ── TAB 2: POSITIONING ── */}
        {active===2 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>Your Specialist Positioning</div>
            <TwoCol leftTitle="✅ SPECIALIST WINS" rightTitle="❌ GENERALIST LOSES"
              left={["Buyers trust specialists — they're paying for expertise, not availability","Fiverr search returns specialists first — keywords are specific","Specialists command higher prices — buyers expect to pay more","Your 7 years at enterprise scale IS specialist depth","Easier to write compelling gig descriptions with a clear focus"]}
              right={["'I do everything DevOps' — no clear reason to choose you","Generalist gigs compete with 10,000+ sellers; specialists with 50–200","Buyers fear generalists will guess — specialists are expected to know","Impossible to differentiate on price alone as a generalist"]} />
            <div style={{ marginTop:14, marginBottom:8, fontWeight:700, color:"#1F4E79", fontSize:14 }}>Your Positioning Statement (use in bio, buyer requests, and intro messages)</div>
            <CodeBlock>{`I am a DevOps Engineer who specializes in diagnosing and fixing infrastructure failures — Docker, Kubernetes, AWS, CI/CD, Terraform, security scanning, and monitoring — and building end-to-end DevOps pipelines for teams that need their systems to work reliably at scale.

My edge: 7 years of enterprise experience at PointClickCare and Deloitte + 7 AI-powered DevOps tools = I understand the problems at a deeper level than most freelancers.

Stack: Jenkins · GitHub Actions · GitLab CI · Azure DevOps · Docker · Kubernetes (AKS/EKS/on-prem) · AWS · Azure · Terraform · Ansible · Helm · SonarQube · Fortify · Prometheus · Grafana · ELK Stack · Dynatrace · JFrog Artifactory · Python · Bash · PowerShell`}</CodeBlock>
            <AlgoTip>Your full tech stack (SonarQube, Fortify, Dynatrace, ELK, Artifactory) gives you gig opportunities that 95% of Fiverr DevOps sellers can't match. Consider a dedicated security scanning gig or monitoring setup gig — very low competition, good pay.</AlgoTip>
          </div>
        )}

        {/* ── TAB 3: SPECIFIC GIGS ── */}
        {active===3 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>5 Specific Gigs — High Search Volume, Algorithm-Optimized</div>
            <div style={{ fontSize:12, color:"#595959", marginBottom:12 }}>Each title matches exact Fiverr buyer search queries. Click any gig to expand, copy, and paste into Fiverr.</div>
            {GIGS_SPECIFIC.map(gig => (
              <div key={gig.id} style={{ marginBottom:10 }}>
                <div onClick={() => setOpenGig(openGig===gig.id?null:gig.id)}
                  style={{ background: openGig===gig.id?"#E8F4FD":"white", border:"1px solid #D0E4F4", borderLeft:"4px solid #2E75B6", borderRadius:6, padding:"12px 16px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontWeight:700, color:"#1F4E79", fontSize:13 }}>{gig.emoji} {gig.label}</span>
                  <span style={{ color:"#2E75B6", fontSize:16 }}>{openGig===gig.id?"▲":"▼"}</span>
                </div>
                {openGig===gig.id && (
                  <div style={{ border:"1px solid #D0E4F4", borderTop:"none", borderRadius:"0 0 6px 6px", padding:16, background:"white" }}>
                    <div style={{ fontSize:11, fontWeight:700, color:"#595959", marginBottom:4, textTransform:"uppercase", letterSpacing:0.5 }}>GIG TITLE</div>
                    <div style={{ position:"relative", marginBottom:12 }}>
                      <div style={{ background:"#F0F6FB", border:"1px solid #C8DFF0", borderRadius:4, padding:"10px 50px 10px 12px", fontSize:13, fontWeight:600, color:"#1F4E79" }}>{gig.title}</div>
                      <CopyBtn text={gig.title} />
                    </div>
                    <Label k="Search Tags" v={gig.tags} />
                    <div style={{ fontSize:11, fontWeight:700, color:"#595959", margin:"10px 0 4px", textTransform:"uppercase", letterSpacing:0.5 }}>GIG DESCRIPTION</div>
                    <CodeBlock>{gig.desc}</CodeBlock>
                    <div style={{ fontSize:11, fontWeight:700, color:"#595959", margin:"10px 0 4px", textTransform:"uppercase", letterSpacing:0.5 }}>PRICING PACKAGES</div>
                    <PkgTable rows={gig.pkg} />
                    <div style={{ background:"#FFF8E8", border:"1px solid #F0A500", borderRadius:4, padding:"6px 10px", fontSize:11, marginTop:8 }}>
                      <span style={{ fontWeight:700, color:"#B8460B" }}>Gig Extras: </span>Rush 12h (+$20) · Extended 2-week support (+$25) · Video call walkthrough (+$30) · Detailed runbook (+$20)
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 4: CHAIN GIGS ── */}
        {active===4 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>3 Chain / Full-Stack Gigs — Higher Value, CTO & Founder Buyers</div>
            <Card bg="#E8F4FD">
              <div style={{ fontSize:12 }}>These gigs target buyers who need a complete solution, not just one fixed tool. CTOs, founders, and engineering managers search "set up my full CI/CD pipeline" or "build my AWS infrastructure." Average order value: $200–$700. Fewer competitors, easier clients, bigger budgets.</div>
            </Card>
            <div style={{ marginTop:12 }}>
              {GIGS_CHAIN.map(gig => (
                <div key={gig.id} style={{ marginBottom:10 }}>
                  <div onClick={() => setOpenGig(openGig===gig.id?null:gig.id)}
                    style={{ background: openGig===gig.id?"#FFF8E8":"white", border:"1px solid #F0C060", borderLeft:"4px solid #F0A500", borderRadius:6, padding:"12px 16px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <span style={{ fontWeight:700, color:"#1F4E79", fontSize:13 }}>{gig.emoji} {gig.label}</span>
                    <span style={{ color:"#F0A500", fontSize:16 }}>{openGig===gig.id?"▲":"▼"}</span>
                  </div>
                  {openGig===gig.id && (
                    <div style={{ border:"1px solid #F0C060", borderTop:"none", borderRadius:"0 0 6px 6px", padding:16, background:"white" }}>
                      <div style={{ fontSize:11, fontWeight:700, color:"#595959", marginBottom:4, textTransform:"uppercase", letterSpacing:0.5 }}>GIG TITLE</div>
                      <div style={{ position:"relative", marginBottom:12 }}>
                        <div style={{ background:"#FFFBF0", border:"1px solid #F0C060", borderRadius:4, padding:"10px 50px 10px 12px", fontSize:13, fontWeight:600, color:"#1F4E79" }}>{gig.title}</div>
                        <CopyBtn text={gig.title} />
                      </div>
                      <Label k="Search Tags" v={gig.tags} />
                      <div style={{ fontSize:11, fontWeight:700, color:"#595959", margin:"10px 0 4px", textTransform:"uppercase", letterSpacing:0.5 }}>GIG DESCRIPTION</div>
                      <CodeBlock>{gig.desc}</CodeBlock>
                      <div style={{ fontSize:11, fontWeight:700, color:"#595959", margin:"10px 0 4px", textTransform:"uppercase", letterSpacing:0.5 }}>PRICING PACKAGES</div>
                      <PkgTable rows={gig.pkg} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <AlgoTip>Chain gigs generate fewer orders than specific gigs but much higher revenue per order. Aim for 70% of your orders from specific gigs (volume, reviews, algorithm fuel) and 30% from chain gigs (revenue). Both feed each other — reviews on specific gigs build trust for chain gig buyers.</AlgoTip>
          </div>
        )}

        {/* ── TAB 5: FAQ & REQUIREMENTS ── */}
        {active===5 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>Gig FAQ + Buyer Requirement Questions</div>
            <div style={{ fontSize:12, color:"#595959", marginBottom:12 }}>Add the FAQ to every gig. Set buyer requirements so you have everything you need the moment someone orders — faster start = faster delivery = better reviews.</div>
            <div style={{ fontWeight:700, color:"#1F4E79", fontSize:14, marginBottom:8 }}>Universal FAQ — Add to All 8 Gigs</div>
            {FAQS.map((f,i) => (
              <div key={i} style={{ marginBottom:8 }}>
                <div style={{ background:"#D6E4F0", borderLeft:"4px solid #2E75B6", padding:"8px 12px", borderRadius:"4px 4px 0 0", fontWeight:700, color:"#1F4E79", fontSize:12 }}>Q: {f.q}</div>
                <div style={{ background:"#F0F6FB", borderLeft:"4px solid #2E75B6", padding:"8px 12px", borderRadius:"0 0 4px 4px", fontSize:12, borderTop:"none" }}>A: {f.a}</div>
              </div>
            ))}
            <div style={{ fontWeight:700, color:"#1F4E79", fontSize:14, margin:"20px 0 8px" }}>Buyer Requirement Questions — by Gig Type</div>
            <div style={{ fontSize:12, color:"#595959", marginBottom:10 }}>These appear when a buyer places an order. Getting detailed answers upfront means you can start immediately.</div>
            {REQS.map((r,i) => (
              <div key={i} style={{ marginBottom:12 }}>
                <div style={{ fontWeight:700, color:"#1F4E79", fontSize:13, marginBottom:6 }}>For {r.gig}:</div>
                <div style={{ background:"#F6F8FA", border:"1px solid #DDD", borderLeft:"4px solid #2E75B6", borderRadius:4, padding:"10px 14px" }}>
                  {r.items.map((item,j) => <div key={j} style={{ fontSize:12, marginBottom: j<r.items.length-1?5:0 }}>{j+1}. {item}</div>)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 6: THUMBNAILS ── */}
        {active===6 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>Gig Thumbnail & Image Strategy</div>
            <AlgoTip>Thumbnail CTR (click-through rate) is one of the highest-weighted algorithm signals. A buyer sees your thumbnail BEFORE reading your title. Better thumbnail = more clicks = algorithm promotes you more. This is the most underrated lever for new sellers.</AlgoTip>
            <Card title="Universal Design Rules for All 8 Gig Images" bg="#E8F4FD">
              {["Size: 1280×769px — use Canva (has this preset built in)","Background: Dark navy #1F4E79 or dark gray #1A1A1A — light backgrounds look cheap in search results","Font: Bold, large, white or light blue — must be readable at 100px thumbnail size","Text: Maximum 6 words on the image — buyers scan, not read","Bottom row: Small tech logos (Docker whale, K8s wheel, AWS smile, Terraform icon)","NO stock photos — use tech icons and clean text only","Optional: Small circle photo of you in corner — adds human trust signal"].map((r,i) => <div key={i} style={{ fontSize:12, marginBottom:4 }}>• {r}</div>)}
            </Card>
            <div style={{ fontWeight:700, color:"#1F4E79", fontSize:14, margin:"14px 0 8px" }}>Thumbnail Text for Each Gig</div>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead>
                  <tr style={{ background:"#1F4E79", color:"white" }}>
                    {["Gig","Big Text Line 1","Big Text Line 2","Small Subtitle","Icons to Use"].map(h => <th key={h} style={{ padding:"8px 10px", textAlign:"left" }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {THUMBS.map((t,i) => (
                    <tr key={i} style={{ background: i%2===0?"#F7FAFD":"white" }}>
                      <td style={{ padding:"8px 10px", fontWeight:700, color:"#1F4E79", borderBottom:"1px solid #EEE" }}>{t.gig}</td>
                      <td style={{ padding:"8px 10px", fontWeight:700, color:"#1E6B3C", borderBottom:"1px solid #EEE" }}>{t.l1}</td>
                      <td style={{ padding:"8px 10px", borderBottom:"1px solid #EEE" }}>{t.l2}</td>
                      <td style={{ padding:"8px 10px", color:"#595959", fontSize:11, borderBottom:"1px solid #EEE" }}>{t.sub}</td>
                      <td style={{ padding:"8px 10px", color:"#595959", fontStyle:"italic", fontSize:11, borderBottom:"1px solid #EEE" }}>{t.icons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Card title="💡 Canva Quick Steps" bg="#FFF8E8" border="#F0A500" titleColor="#B8460B">
              {["Go to canva.com → Create design → Custom size → 1280×769","Set background to dark navy (#1F4E79)","Add Line 1 text: large bold white font (Montserrat Bold or similar)","Add Line 2 text: slightly smaller, light blue (#A8D4F5)","Add subtitle: small white text, bottom third","Search Canva for tech icons: Docker, Kubernetes, AWS, Terraform, Jenkins","Download as PNG → upload to Fiverr as gig cover image"].map((s,i) => <div key={i} style={{ fontSize:12, marginBottom:4 }}>{i+1}. {s}</div>)}
            </Card>
          </div>
        )}

        {/* ── TAB 7: 30-DAY PLAN ── */}
        {active===7 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>First 30 Days — Algorithm Growth Plan</div>
            <Card bg="#E8F4FD">
              <div style={{ fontSize:12 }}><strong>The New Seller Window:</strong> Fiverr gives every new seller an invisible 30-day boost — your gigs rank higher than your review count would normally justify. Perform well during this window (fast replies, zero cancellations, early reviews) and the algorithm keeps promoting you. Go quiet or cancel orders and it buries you — recovery takes months.</div>
            </Card>
            <div style={{ marginTop:16 }}>
              {WEEKS.map((w,i) => (
                <div key={i} style={{ border:`1px solid #C8DFF0`, borderLeft:"4px solid #2E75B6", borderRadius:6, marginBottom:14, overflow:"hidden" }}>
                  <div style={{ background: w.bg, padding:"10px 16px", fontWeight:700, color:"#1F4E79", fontSize:13 }}>{w.label}</div>
                  <div style={{ padding:"12px 16px" }}>
                    <div style={{ fontWeight:700, color:"#2E75B6", fontSize:12, marginBottom:6 }}>DAILY (every day this week):</div>
                    {w.daily.map((d,j) => <div key={j} style={{ fontSize:12, marginBottom:4, display:"flex", gap:6 }}><span style={{ color:"#2E75B6" }}>▸</span>{d}</div>)}
                    <div style={{ fontWeight:700, color:"#2E75B6", fontSize:12, margin:"10px 0 6px" }}>THIS WEEK:</div>
                    {w.weekly.map((d,j) => <div key={j} style={{ fontSize:12, marginBottom:4, display:"flex", gap:6 }}><span style={{ color:"#595959" }}>•</span>{d}</div>)}
                    <div style={{ background:"#D9EFE3", border:"1px solid #1E6B3C", borderRadius:4, padding:"7px 10px", marginTop:10, fontSize:12, fontWeight:700, color:"#1E6B3C" }}>📊 {w.metric}</div>
                  </div>
                </div>
              ))}
            </div>
            <Card title="⚡ The Complete Formula" bg="#D9EFE3" border="#1E6B3C" titleColor="#1E6B3C">
              <div style={{ fontSize:12, lineHeight:2 }}>
                <strong>Profile 100% complete</strong> + <strong>8 gigs published day 1</strong> + <strong>10 buyer requests/day</strong> + <strong>Reply in &lt;1 hour</strong> + <strong>Zero cancellations</strong> + <strong>Over-deliver every order</strong> + <strong>Review request 24h after delivery</strong><br/>
                = <strong style={{ color:"#1E6B3C", fontSize:13 }}>First orders in 3–5 days · 10 reviews in 30 days · Market pricing in 60 days · Algorithm sending organic traffic daily</strong>
              </div>
            </Card>
            <div style={{ textAlign:"center", padding:"20px 0 10px", color:"#1F4E79", fontWeight:700, fontStyle:"italic", fontSize:14 }}>
              Your depth is your edge. Show it on every order.<br/>
              <span style={{ fontWeight:400, fontSize:12, color:"#595959" }}>7 years · 7 AI projects · 2 enterprise companies · Full stack from Docker to Dynatrace.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
