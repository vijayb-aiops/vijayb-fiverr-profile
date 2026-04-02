import { useState } from "react";

const SECTIONS = ["Profile","Algorithm","Positioning","Traffic Gigs (6)","High-Ticket Gigs (4)","Bonus Gigs","FAQ & Reqs","Thumbnails","7-Day Launch","30-Day Plan"];

const CopyBtn = ({ text }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      style={{ position:"absolute", top:8, right:8, background:copied?"#1E6B3C":"#2E75B6", color:"white", border:"none", borderRadius:4, padding:"4px 10px", fontSize:11, cursor:"pointer", fontWeight:700, transition:"background 0.2s" }}>
      {copied?"✓ Copied!":"Copy"}
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
    <span style={{ fontWeight:700, color:"#B8460B", fontSize:12 }}>⚡ ALGORITHM TIP  </span>
    <span style={{ fontSize:12, color:"#1A1A1A" }}>{children}</span>
  </div>
);

const PkgTable = ({ rows }) => (
  <div style={{ overflowX:"auto", margin:"10px 0" }}>
    <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
      <thead>
        <tr>
          <th style={{ background:"#1F4E79", color:"white", padding:"8px 10px", textAlign:"left", width:"22%" }}></th>
          <th style={{ background:"#1F4E79", color:"white", padding:"8px 10px", textAlign:"center" }}>BASIC</th>
          <th style={{ background:"#2E75B6", color:"white", padding:"8px 10px", textAlign:"center" }}>STANDARD ⭐</th>
          <th style={{ background:"#1F4E79", color:"white", padding:"8px 10px", textAlign:"center" }}>PREMIUM</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([label,b,s,p],i) => (
          <tr key={i} style={{ background:i%2===0?"#F7FAFD":"white" }}>
            <td style={{ padding:"7px 10px", fontWeight:700, color:"#595959", fontSize:11, borderBottom:"1px solid #EEE" }}>{label}</td>
            <td style={{ padding:"7px 10px", textAlign:"center", borderBottom:"1px solid #EEE" }}>{b}</td>
            <td style={{ padding:"7px 10px", textAlign:"center", background:"#EEF5FB", borderBottom:"1px solid #EEE", fontWeight:label==="Price"?700:400, color:label==="Price"?"#1E6B3C":"inherit" }}>{s}</td>
            <td style={{ padding:"7px 10px", textAlign:"center", borderBottom:"1px solid #EEE", fontWeight:label==="Price"?700:400, color:label==="Price"?"#1E6B3C":"inherit" }}>{p}</td>
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

const FAQ = ({ items }) => (
  <div style={{ marginTop:10 }}>
    {items.map((f,i) => (
      <div key={i} style={{ marginBottom:8 }}>
        <div style={{ background:"#D6E4F0", borderLeft:"4px solid #2E75B6", padding:"7px 12px", borderRadius:"4px 4px 0 0", fontWeight:700, color:"#1F4E79", fontSize:12 }}>Q: {f.q}</div>
        <div style={{ background:"#F0F6FB", borderLeft:"4px solid #2E75B6", padding:"7px 12px", borderRadius:"0 0 4px 4px", fontSize:12 }}>A: {f.a}</div>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────
// PROFILE DATA
// ─────────────────────────────────────────────────────────────
const HEADLINE = `Senior DevOps Engineer | CI/CD · Docker · Kubernetes · AWS · Terraform | Enterprise Scale — PointClickCare · Deloitte · Roche`;

const BIO = `Your pipeline is broken, your Kubernetes pods are crashing, or your AWS bill is out of control. I've fixed every version of these problems — at enterprise scale, under production pressure, at companies that can't afford downtime.

I'm a DevOps Engineer with 7+ years at PointClickCare (healthcare SaaS, 1,500+ users), Deloitte (50+ AWS accounts, global consulting), and Roche (regulated healthcare, strict compliance environments). I don't experiment on your infrastructure — I apply solutions I've already proven.

What I fix and build on Fiverr:
🐳 Docker — container crashes, Dockerfile optimization, Compose networking
☸️ Kubernetes — CrashLoopBackOff, OOMKilled, Helm failures, Ingress issues
🔄 CI/CD — GitHub Actions, Jenkins, GitLab CI, Azure DevOps: setup, repair, optimization
☁️ AWS — EC2, IAM, EKS, RDS, multi-account governance, cost reduction
🏗️ Terraform & Ansible — IaC modules, state errors, env separation
🔐 DevSecOps — SonarQube, Fortify, secret rotation, RBAC, compliance gates
📊 Monitoring — Prometheus, Grafana, ELK Stack, Dynatrace alerting
🔗 Full Pipeline — end-to-end from code commit to Kubernetes deployment

My results at real companies:
• Reduced deployment failures 30–40% at PointClickCare (Jenkins + Kubernetes)
• Automated governance across 50+ AWS accounts at Deloitte — onboarding: days → minutes
• 99.9% uptime maintained on production Kubernetes clusters
• Cut release cycle 25% through Helm chart standardization
• Deployed Dynatrace across 100+ Azure App Services via PowerShell automation
• Enforced SonarQube + Fortify gates blocking vulnerable code pre-deployment at Roche
• Automated 90% of manual DevOps tasks through scripted pipelines and IaC

Portfolio: github.com/[your-username] | YouTube demos: [channel link]
I respond within 1 hour. Message me before ordering — I'll tell you exactly what you need.`;

const SKILLS_LIST = [
  ["1","Docker"],["2","Kubernetes"],["3","AWS"],["4","CI/CD"],["5","Terraform"],
  ["6","DevOps"],["7","Jenkins"],["8","GitHub Actions"],["9","Linux"],["10","Python"],
  ["11","GitLab CI"],["12","Ansible"],["13","Prometheus"],["14","Azure"],["15","SonarQube"],
];

const TECH_STACK = {
  "CI/CD & Automation":"Jenkins, GitHub Actions, GitLab CI/CD, Azure DevOps, ArgoCD, Groovy, YAML",
  "Cloud — AWS":"EC2, S3, IAM, Lambda, EKS, RDS, CloudFormation, Organizations, CloudWatch, SNS, SES, EventBridge, VPC",
  "Cloud — Azure":"AKS, App Services, Key Vault, ARM Templates, Azure DevOps, Azure AD",
  "Infrastructure as Code":"Terraform, Ansible, Ansible Tower, Helm Charts, CloudFormation, ARM Templates",
  "Containers & Orchestration":"Docker, Kubernetes (AKS, EKS, on-prem), Helm, Rancher, Ingress, PVC, RBAC",
  "Security & DevSecOps":"SonarQube, Fortify SSC/FoD/WebInspect, GitHub Advanced Security, NexusIQ, IAM, RBAC, Secret Rotation, Azure Key Vault",
  "Monitoring & Observability":"Prometheus, Grafana, Alertmanager, ELK Stack (Elasticsearch/Logstash/Kibana), Dynatrace, CloudWatch",
  "Artifact & SCM":"JFrog Artifactory, Nexus, GitHub Packages, Git, GitHub EMU, GitLab, Bitbucket",
  "Scripting":"Python (Boto3), Bash/Shell, PowerShell, Groovy",
};

// ─────────────────────────────────────────────────────────────
// 6 TRAFFIC GIGS
// ─────────────────────────────────────────────────────────────
const TRAFFIC_GIGS = [
  {
    id:0, emoji:"🐳", label:"TRAFFIC GIG 1 — Docker Errors & Dockerfile",
    title:"I will fix your Docker container errors, Dockerfile, and Compose issues",
    tags:"docker · dockerfile · docker-compose · container errors · devops",
    thumb:{ l1:"Docker Broken?", l2:"Fixed Fast", sub:"Dockerfile · Compose · Errors · Optimization" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 10 clients

Your Docker container is crashing, your build is failing, or your Compose networking is broken. These block your entire team. I diagnose and fix them fast — with a clear explanation so the same issue doesn't come back.

What I fix:
✅ Docker build errors — layer failures, missing deps, base image issues, multi-stage problems
✅ Container runtime crashes — exit codes, bad entrypoints, env var issues, permission errors
✅ Docker Compose — networking between services, volumes, dependency ordering, env files
✅ Dockerfile optimization — reduce image size 50%+ with multi-stage builds and layer caching
✅ Registry issues — ECR/DockerHub authentication, private image pull failures
✅ Docker networking — bridge, host, overlay, container-to-container connectivity

How I work:
1. You share your Dockerfile, Compose file, and full error output
2. I reproduce the issue in a clean environment
3. I apply the fix and test end-to-end
4. Delivery: fixed files + root-cause explanation + prevention notes

Why me:
• 7+ years Docker at PointClickCare, Deloitte, and Roche — production environments
• Reduced container-related deployment failures 30% at PointClickCare
• Deep stack: Docker, Docker Compose, multi-stage builds, ECR, Docker networking
• Built AI Docker Security Scanner — github.com/[username]

I respond within 1 hour. Let's fix it.`,
    pkg:[
      ["Package","Quick Fix","Full Debug","Deep Audit"],
      ["What's included","1 issue diagnosed + fixed + explained","Up to 3 issues + Dockerfile optimization + docs","Full Dockerfile/Compose audit + all fixes + best practices guide"],
      ["Price","$35","$65","$100"],
      ["Delivery","1 day","2 days","3 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","3 days","5 days","7 days"],
    ],
    faq:[
      { q:"What do you need from me to start?", a:"Your Dockerfile, docker-compose.yml (if used), full error output or logs, and your Docker/base image version. If it's a runtime issue, paste the output of `docker logs [container-name]`." },
      { q:"Do I need to give you access to my server?", a:"Not for most fixes — sharing files and error output is usually enough. For complex runtime issues I may ask for SSH access, but I can always suggest an approach first without access." },
      { q:"Can you fix issues in production containers?", a:"Yes. I understand the risk. I'll always suggest a test/fix approach before touching production, and I document every change so you can roll back if needed." },
      { q:"What if the fix doesn't work?", a:"I test the fix before delivering. If you encounter a new problem after delivery, message me — I'll look at it at no extra charge within the support window." },
      { q:"Can you also optimize my Dockerfile even if it's not broken?", a:"Yes — the Standard and Premium packages include optimization. Multi-stage builds can cut image sizes by 50–70%, which speeds up build times and reduces registry costs." },
      { q:"How fast can you actually fix it?", a:"Most Docker errors are fixed within 3–6 hours of receiving the files. I'll give you an honest estimate after reading your error." },
    ],
    reqs:["Paste the full error message or screenshot","Share your Dockerfile (and docker-compose.yml if used)","Describe what you're trying to do — what command, what expected outcome","What Docker version and base image are you using?","Is this on a local machine, a CI runner, or a cloud server?","Is this blocking production? (I'll prioritize urgent work)"],
  },
  {
    id:1, emoji:"☸️", label:"TRAFFIC GIG 2 — Kubernetes Pod Debugging",
    title:"I will debug Kubernetes pod failures, CrashLoopBackOff, and Helm errors",
    tags:"kubernetes · crashloopbackoff · k8s · helm · pod failure",
    thumb:{ l1:"K8s Failing?", l2:"Root Cause Found", sub:"CrashLoop · OOMKilled · Helm · Ingress" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 10 clients

CrashLoopBackOff. OOMKilled. ImagePullBackOff. Pending forever. These errors stop production deployments cold. I trace root cause through the full Kubernetes stack and fix it — fast.

What I debug and fix:
✅ CrashLoopBackOff — entrypoint failures, bad ConfigMaps, missing secrets, init failures
✅ ImagePullBackOff — registry credentials, private repos, incorrect image tags
✅ OOMKilled — resource limit tuning, memory leak identification, right-sizing
✅ Pending pods — node affinity, taints/tolerations, PVC binding, insufficient resources
✅ Helm chart failures — template rendering errors, values.yaml conflicts, upgrade rollbacks
✅ Service & Ingress misconfiguration — traffic not routing, wrong selectors, TLS issues
✅ Init container and sidecar failures
✅ RBAC permission errors — ServiceAccount, Role, ClusterRole issues

How I work:
1. You share pod describe output, logs, and Kubernetes events
2. I trace root cause through the full stack
3. I apply the fix and validate it in your cluster
4. Delivery: working fix + plain-English explanation + prevention checklist

Why me:
• Managed Kubernetes (AKS) for 1,500+ users at PointClickCare — production, no excuses
• Cut release cycle 25% through Helm chart standardization across 200+ repos
• Stack: AKS, EKS, on-prem K8s, Rancher, Helm, Ingress-nginx, cert-manager, ArgoCD
• Built AI Kubernetes Debugger — github.com/[username]

I respond within 1 hour.`,
    pkg:[
      ["Package","Pod Fix","Multi-Pod Debug","Cluster Health"],
      ["What's included","Single pod failure diagnosed + fixed","Up to 5 pods/issues + Helm fix + root cause doc","Full cluster audit + all issues fixed + hardening guide"],
      ["Price","$50","$90","$140"],
      ["Delivery","1 day","2 days","4 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","3 days","5 days","7 days"],
    ],
    faq:[
      { q:"What information do you need to start?", a:"Run these commands and paste the output: `kubectl describe pod [name] -n [namespace]` and `kubectl logs [name] -n [namespace] --previous`. Also share your deployment YAML and values.yaml if using Helm." },
      { q:"Do you need kubeconfig access to my cluster?", a:"For most issues, log output and describe output is enough. For complex issues I'll ask for kubeconfig — read-only access is preferred and I never modify anything without your approval." },
      { q:"Can you fix Helm chart deployment failures?", a:"Yes — template errors, values conflicts, upgrade failures, and rollback issues are all common requests. Share your Chart.yaml, values.yaml, and the exact error from `helm install` or `helm upgrade`." },
      { q:"What Kubernetes distributions do you support?", a:"AKS (Azure), EKS (AWS), GKE (GCP), on-prem K8s, Rancher, and k3s. I'll ask which you're using at order start." },
      { q:"Can you fix RBAC and ServiceAccount issues?", a:"Yes — permission errors (Forbidden, Unauthorized), ServiceAccount misconfiguration, Role/ClusterRole binding issues are all in scope." },
      { q:"What if the problem reappears after you fix it?", a:"Message me within the support window. If it's the same root cause, I fix it at no extra charge. If it's a new issue, we discuss." },
    ],
    reqs:["Paste: `kubectl describe pod [pod-name] -n [namespace]`","Paste: `kubectl logs [pod-name] -n [namespace] --previous` (if applicable)","Share your Deployment/StatefulSet YAML and values.yaml (if Helm)","Which K8s distribution? (AKS, EKS, on-prem, Rancher)","When did this start? What changed just before it broke?","Is this blocking production? (I'll prioritize)"],
  },
  {
    id:2, emoji:"🔄", label:"TRAFFIC GIG 3 — GitHub Actions & GitLab CI Fix",
    title:"I will fix your failing GitHub Actions workflow or GitLab CI pipeline",
    tags:"github actions · gitlab ci · cicd · workflow · pipeline fix",
    thumb:{ l1:"Pipeline Broken?", l2:"Back Online Fast", sub:"GitHub Actions · GitLab CI · YAML · Secrets" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 10 clients

Your GitHub Actions workflow is failing. GitLab CI is throwing errors. Tests pass locally but break in the pipeline. I've fixed every variation of this problem — across hundreds of repos at enterprise scale.

What I fix:
✅ GitHub Actions YAML errors — syntax, step ordering, conditional logic, matrix builds
✅ GitLab CI pipeline failures — stages, jobs, artifacts, cache, runners
✅ Secrets and environment variable issues — GitHub Secrets, GitLab CI/CD variables
✅ Docker build and push stages failing in pipelines
✅ Test failures specific to CI environment (permissions, env vars, network)
✅ Runner and agent issues — self-hosted runner config, timeout, resource limits
✅ Kubernetes deployment steps (kubectl, Helm, ArgoCD in pipelines)
✅ Reusable workflows / GitLab CI templates and inheritance errors
✅ Pipeline optimization — cut build time 30–50% through caching and parallelization

Why me:
• Reduced GitHub Actions/Jenkins failures 30% at PointClickCare across 200+ repos
• Automated secret rotation via GitHub Actions at Deloitte (50+ AWS accounts)
• Enforced SonarQube and Fortify quality gates in CI pipelines at Roche
• Stack: GitHub Actions, GitLab CI, Azure DevOps, ArgoCD, YAML, Groovy, Bash, Python
• Built AI GitHub Actions Healer — github.com/[username]

I deliver working, documented pipelines — not just hacks.`,
    pkg:[
      ["Package","Fix It","Build It","Pro Pipeline"],
      ["What's included","Diagnose + fix single broken workflow/pipeline","Full pipeline (build/test/deploy) for your app","Advanced pipeline + K8s deploy + secrets + caching + docs"],
      ["Price","$45","$95","$150"],
      ["Delivery","1 day","3 days","5 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","3 days","5 days","7 days"],
    ],
    faq:[
      { q:"What do you need to start fixing my pipeline?", a:"Share your workflow YAML (.github/workflows/*.yml or .gitlab-ci.yml), the full error output from the failed run, and a brief description of what the pipeline is supposed to do." },
      { q:"Do you need access to my GitHub or GitLab repo?", a:"For most fixes, sharing the YAML and error log is enough. If I need to run the pipeline myself, I may ask for repo read access — I never need write or admin access." },
      { q:"Can you fix pipelines that use self-hosted runners?", a:"Yes — runner configuration, resource limits, network access, and Docker-in-Docker issues are all common and in scope." },
      { q:"Can you help with secrets and environment variable issues?", a:"Yes. I work with GitHub Secrets, GitLab CI/CD variables, AWS Parameter Store, Azure Key Vault, and HashiCorp Vault. I'll never ask you to share actual secret values — just variable names and error context." },
      { q:"Can you also build a new pipeline from scratch?", a:"Yes — the Standard and Premium packages cover building a full pipeline. Tell me your app stack, target cloud, and deployment target (Kubernetes, EC2, ECS, etc.)." },
      { q:"What if the fix breaks something else downstream?", a:"I test end-to-end before delivering. If something breaks in the support window, message me and I'll investigate at no extra charge." },
    ],
    reqs:["Paste or share your workflow YAML file (.github/workflows/*.yml or .gitlab-ci.yml)","Paste the full error output from the failing run","What is the pipeline supposed to do? (build/test/deploy to where?)","What branch triggers the failure?","Are you using self-hosted or GitHub-hosted runners?","Is there a deadline or production impact?"],
  },
  {
    id:3, emoji:"🔧", label:"TRAFFIC GIG 4 — Jenkins Pipeline Fix",
    title:"I will fix your Jenkins pipeline, Groovy scripts, and shared library errors",
    tags:"jenkins · jenkins pipeline · groovy · cicd · shared library",
    thumb:{ l1:"Jenkins Broken?", l2:"Pipeline Fixed", sub:"Groovy · Shared Libs · Agents · Multibranch" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 10 clients

Jenkins pipeline failing? Groovy script throwing cryptic errors? Shared library not loading? Agent won't provision? These problems block every team using Jenkins — I've fixed them all across hundreds of repos at PointClickCare.

What I fix:
✅ Declarative and Scripted Pipeline syntax errors and logic bugs
✅ Groovy shared library issues — loading, importing, method resolution
✅ Jenkins agent/node provisioning failures (static and dynamic — Kubernetes, Docker)
✅ Plugin compatibility issues and pipeline step failures
✅ Docker build and push stages in Jenkinsfile
✅ Credential binding and secrets access issues
✅ Multibranch pipeline scan and trigger problems
✅ SonarQube, Fortify, and Artifactory plugin integration
✅ Pipeline performance — parallel stages, cache optimization
✅ Jenkins-to-Kubernetes deployment (kubectl, Helm in pipeline)

Why me:
• Managed Jenkins at PointClickCare — 200+ repositories, thousands of daily builds
• Reduced Jenkins pipeline failure rate 30% through standardized Groovy shared libraries
• Integrated SonarQube + Fortify quality gates blocking vulnerable code at Roche
• Stack: Jenkins LTS, Declarative + Scripted Pipelines, Groovy, Docker agents, Kubernetes agents, JFrog Artifactory, SonarQube, Fortify

I deliver fixed, documented pipelines — not workarounds.`,
    pkg:[
      ["Package","Fix It","Build It","Pro Pipeline"],
      ["What's included","Diagnose + fix single Jenkins failure","Full Jenkinsfile for build/test/deploy + docs","Advanced pipeline + shared lib + K8s deploy + security gates"],
      ["Price","$50","$100","$160"],
      ["Delivery","1 day","3 days","5 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","3 days","5 days","7 days"],
    ],
    faq:[
      { q:"What do I need to share with you?", a:"Your Jenkinsfile (or shared library code), the full console output from the failing build, your Jenkins version, and a description of what the pipeline should do." },
      { q:"Do you need access to my Jenkins instance?", a:"Not usually. The Jenkinsfile and console log are enough for most issues. If I need to reproduce something complex, I may run Jenkins locally using Docker." },
      { q:"Can you fix Groovy shared library errors?", a:"Yes — shared library loading errors, method signature issues, and import problems are some of the most common Jenkins issues I fix." },
      { q:"Can you help with Jenkins agents and node provisioning?", a:"Yes — static agents, dynamic Docker agents, Kubernetes pod agents (jenkins/inbound-agent), and cloud plugin configuration are all in scope." },
      { q:"Can you integrate SonarQube or Fortify into a Jenkins pipeline?", a:"Yes — I've done this at enterprise scale at Roche. I can set up quality gates that block builds from promoting if security thresholds aren't met." },
      { q:"What Jenkins plugins do you know?", a:"Pipeline, Blue Ocean, Multibranch, Docker, Kubernetes, Git, GitHub/GitLab, SonarQube Scanner, Fortify, JFrog Artifactory, NexusIQ, Credentials, SSH Agent, AnsiColor, and many more." },
    ],
    reqs:["Share your Jenkinsfile (paste or attach)","Paste the full console output from the failing build","What Jenkins version are you using? (check Manage Jenkins → About)","Are you using shared libraries? If so, share the relevant code","Are you using static or dynamic (Docker/K8s) agents?","What is this pipeline supposed to do? (build what, deploy where?)"],
  },
  {
    id:4, emoji:"🏗️", label:"TRAFFIC GIG 5 — Terraform Errors & IaC Fix",
    title:"I will fix your Terraform errors, state issues, and broken IaC modules",
    tags:"terraform · infrastructure as code · terraform state · iac · terraform modules",
    thumb:{ l1:"Terraform Broken?", l2:"State Fixed", sub:"State Errors · Modules · AWS · Azure · Plan" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 10 clients

Terraform apply failing? State file locked or corrupted? Module errors you can't trace? These issues can block your entire infrastructure team. I fix them — and deliver code that passes terraform plan clean.

What I fix or build:
✅ Terraform state errors — locked state, state drift, resource conflicts, remote backend issues
✅ Provider version conflicts and required_providers errors
✅ Module errors — input variable mismatches, output references, nested module issues
✅ Plan and apply failures — resource dependency ordering, cycles, type errors
✅ Remote state setup — S3 + DynamoDB locking, Azure Storage, Terraform Cloud
✅ Environment separation — dev/staging/prod via workspaces or directory structure
✅ Security best practices — least-privilege IAM, encryption at rest, secrets via Parameter Store
✅ Also support: Ansible playbook errors, CloudFormation stack failures, ARM Template issues

What I build (from scratch):
✅ VPC, EC2, EKS, RDS, S3, IAM, Lambda modules
✅ Full variable/output structure + README documentation
✅ Code passes terraform validate + terraform plan clean on delivery

Why me:
• Provisioned CI/CD infrastructure at PointClickCare with Terraform + Ansible
• Standardized IaC across all Deloitte client AWS accounts
• Designed cross-account IAM via Terraform for 100+ AWS sub-accounts
• Stack: Terraform, Ansible, Ansible Tower, CloudFormation, ARM Templates, AWS, Azure`,
    pkg:[
      ["Package","Fix / Debug","Module Build","Full IaC Stack"],
      ["What's included","Terraform errors + state repair + root-cause doc","1–3 reusable modules + variables + outputs + README","Full env (VPC, compute, DB, IAM, secrets) + docs + review"],
      ["Price","$55","$115","$190"],
      ["Delivery","2 days","4 days","7 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","3 days","5 days","7 days"],
    ],
    faq:[
      { q:"What do I need to share to get started?", a:"Your Terraform files (zip and attach or paste), the full error output from `terraform plan` or `terraform apply`, your Terraform version (`terraform version`), and your cloud provider (AWS/Azure/GCP)." },
      { q:"Can you fix a locked or corrupted state file?", a:"Yes — state lock issues (DynamoDB, Terraform Cloud), state drift between Terraform and real infrastructure, and `terraform state mv` / `terraform import` operations are all in scope." },
      { q:"Do you need cloud credentials?", a:"For debugging only: usually not — the error and code are enough. For building new infrastructure I'll use your test account or a sandbox. I never store credentials and always prefer read-only access first." },
      { q:"Can you also fix Ansible playbook errors?", a:"Yes — Ansible task failures, module errors, inventory issues, vault problems, and Ansible Tower job template errors are all in scope. Mention it when ordering." },
      { q:"Will the Terraform code pass a security review?", a:"The Premium package includes a security review pass: least-privilege IAM, encryption settings, secrets via Parameter Store (not hardcoded), and Terraform best practices." },
      { q:"Can you help migrate from CloudFormation or ARM Templates to Terraform?", a:"Yes — I have enterprise experience with all three. Migration scope affects which package is right; message me first to scope it." },
    ],
    reqs:["Share your Terraform files (zip and attach, or paste key files)","Paste the full error from `terraform plan` or `terraform apply`","What is your Terraform version? (`terraform version`)","Cloud provider: AWS, Azure, or GCP?","Are you using remote state? (S3, Terraform Cloud, Azure Storage — which one?)","What should the infrastructure do? (brief description of target architecture)"],
  },
  {
    id:5, emoji:"☁️", label:"TRAFFIC GIG 6 — AWS Issues & Troubleshooting",
    title:"I will fix your AWS infrastructure issues, IAM errors, and configuration problems",
    tags:"aws · iam · aws troubleshooting · aws ec2 · aws devops",
    thumb:{ l1:"AWS Broken?", l2:"Fixed & Secured", sub:"IAM · EC2 · EKS · RDS · Multi-Account" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 10 clients

Access denied. Launch failures. Networking not working. Services not connecting. AWS errors are cryptic and expensive to debug without someone who has seen them at scale. I have — across 50+ AWS accounts at Deloitte and multiple enterprise environments.

What I fix:
✅ IAM — Access Denied errors, policy debugging, role assumptions, cross-account trust
✅ EC2 — launch failures, security group rules, instance connectivity, user data errors
✅ EKS — cluster access, node group issues, IAM roles for service accounts (IRSA)
✅ RDS — connectivity issues, parameter group errors, snapshot/restore problems
✅ VPC — subnet routing, NAT Gateway, VPC peering, security groups, NACLs
✅ S3 — bucket policy errors, access issues, lifecycle rules, cross-account access
✅ Lambda — permission errors, timeout debugging, VPC connectivity, layer issues
✅ CloudFormation — stack failures, rollback issues, dependency errors
✅ Multi-account governance — AWS Organizations, SCPs, cross-account roles
✅ AWS Cost — identify waste, right-size, Reserved Instance / Savings Plan analysis

Why me:
• Managed 50+ AWS accounts at Deloitte — multi-account governance, SCPs, cross-account IAM
• Automated AWS account provisioning: manual days → scripted minutes
• Designed cross-account IAM for 100+ sub-accounts at enterprise scale
• Stack: EC2, EKS, IAM, RDS, S3, Lambda, VPC, Organizations, CloudWatch, SNS, Terraform`,
    pkg:[
      ["Package","Single Issue","Multi-Issue","Deep Dive"],
      ["What's included","1 AWS issue diagnosed + fixed + explained","Up to 4 issues + IAM review + documentation","Full architecture review + all fixes + security posture report"],
      ["Price","$60","$110","$175"],
      ["Delivery","1 day","3 days","5 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","3 days","5 days","7 days"],
    ],
    faq:[
      { q:"What access do you need?", a:"Read-only IAM access is my preference. For most issues I'll ask you to share screenshots, CloudTrail logs, or error messages rather than credentials. I'll tell you exactly what I need before you share anything." },
      { q:"Can you fix IAM permission errors?", a:"Yes — this is one of the most common AWS issues. Share the exact error message and the ARN of the resource being accessed. I'll identify the missing permission and write the correct policy." },
      { q:"Can you help with multi-account AWS setups?", a:"Yes — AWS Organizations, Service Control Policies (SCPs), cross-account roles, and account vending automation are areas I've done at enterprise scale at Deloitte." },
      { q:"Can you help reduce my AWS costs?", a:"Yes — the Deep Dive package includes a cost analysis. Common findings: idle EC2 instances, oversized RDS, forgotten Elastic IPs, S3 storage class misuse, and missing Savings Plans." },
      { q:"Do you work with AWS GovCloud or regulated environments?", a:"Yes — I have experience in regulated healthcare environments (Roche, PointClickCare) with strict compliance requirements. IAM policies, audit logging, and encryption standards are second nature." },
      { q:"Can you help with EKS specifically?", a:"Yes — EKS node group issues, IRSA (IAM Roles for Service Accounts), aws-auth ConfigMap, and EKS add-on management are all in scope." },
    ],
    reqs:["Describe the issue: what were you trying to do and what error appeared?","Paste the full error message (AWS console, CLI, or CloudTrail)","Which AWS services are involved? (EC2, IAM, RDS, S3, EKS, Lambda, VPC, etc.)","What is your AWS region?","Do you want read-only IAM access shared, or will you paste outputs for me to analyze?","Is this blocking production?"],
  },
];

// ─────────────────────────────────────────────────────────────
// 4 HIGH-TICKET GIGS
// ─────────────────────────────────────────────────────────────
const HIGHTICKET_GIGS = [
  {
    id:6, emoji:"🔗", label:"HIGH-TICKET GIG 1 — Full CI/CD Pipeline (Code to Cloud)",
    title:"I will build your complete DevOps CI/CD pipeline from Docker to Kubernetes",
    tags:"devops pipeline · cicd · kubernetes deployment · docker · github actions",
    thumb:{ l1:"Code → Cloud", l2:"Full Pipeline Built", sub:"Docker · CI/CD · Kubernetes · End-to-End" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 5 clients

You need your application to go from code commit to cloud deployment automatically, reliably, every time. That's exactly what I build — at the same standard I used at PointClickCare serving 1,500+ users.

The full pipeline I build for you:
✅ STEP 1 — Containerize: Optimized multi-stage Dockerfile
✅ STEP 2 — CI: Automated build + test + security scan (GitHub Actions or Jenkins)
✅ STEP 3 — Registry: Push to Docker Hub, ECR, or ACR with tagging strategy
✅ STEP 4 — CD: Helm-based Kubernetes deployment (AKS, EKS, or on-prem)
✅ STEP 5 — Secrets: GitHub Secrets, AWS Parameter Store, or Azure Key Vault
✅ STEP 6 — Monitoring: Prometheus + Grafana basic setup with deployment alerts

What you receive on delivery:
📄 Fully working pipeline — commits trigger automated deployments
📄 All YAML/Groovy/Helm files committed to your repo
📄 Clear documentation — your team maintains it without me
📄 Rollback procedure documented
📄 Security gate (SonarQube or GitHub Advanced Security) — Premium only

Your choice of stack:
• CI: GitHub Actions or Jenkins
• CD: Helm + AKS / EKS / on-prem K8s
• Registry: Docker Hub, ECR, or ACR

Why me:
• Built and ran this exact stack at PointClickCare for production — 1,500+ users, 200+ repos
• 7+ years across GitHub Actions, Jenkins, Docker, Kubernetes, Helm, AWS, Azure
• Every delivery includes documentation your team can own`,
    pkg:[
      ["Package","Starter Pipeline","Full Pipeline","Enterprise Pipeline"],
      ["What's included","Docker + CI build/test + basic K8s deploy","Full chain + Helm + Secrets + Prometheus/Grafana","Full chain + multi-env + security scanning + architecture doc"],
      ["Price","$220","$400","$650"],
      ["Delivery","5 days","7 days","12 days"],
      ["Revisions","2","3","Unlimited"],
      ["Post-delivery support","7 days","10 days","14 days"],
    ],
    faq:[
      { q:"What do I need to provide to get started?", a:"Your application repo (or a description of your app stack), your target cloud provider (AWS/Azure/GCP), and your preferred CI tool (GitHub Actions/Jenkins). I'll design the pipeline based on your setup." },
      { q:"Do you support both GitHub Actions and Jenkins?", a:"Yes — I've built enterprise pipelines on both. GitHub Actions is faster to set up; Jenkins is better for complex shared libraries and on-prem. Tell me your preference or constraints and I'll recommend." },
      { q:"What Kubernetes targets do you support?", a:"AKS (Azure), EKS (AWS), GKE (GCP), and on-prem Kubernetes. Helm is my default deployment method, with ArgoCD as an option for GitOps workflows." },
      { q:"What application stacks can you containerize?", a:"Node.js, Python, Java/Spring Boot, .NET, Go, and most other common stacks. Share your app language/framework and I'll build the correct Dockerfile." },
      { q:"Does the pipeline include security scanning?", a:"The Enterprise package includes SonarQube or GitHub Advanced Security integration with quality gates that block promotion of vulnerable code. Fortify integration is available as an add-on." },
      { q:"Will my team be able to maintain this after delivery?", a:"Yes — documentation is a first-class deliverable, not an afterthought. I write READMEs that explain how every part works, how to update it, and what to do when it breaks." },
    ],
    reqs:["What language/framework is your application? (Node.js, Python, Java, .NET, Go, etc.)","Target cloud provider: AWS, Azure, or GCP?","Preferred CI tool: GitHub Actions, Jenkins, or GitLab CI?","Target Kubernetes platform: AKS, EKS, GKE, on-prem?","Do you have an existing Dockerfile or starting from scratch?","What environments do you need? (dev/staging/prod or just prod?)","Any security scanning requirements? (SonarQube, Snyk, etc.)"],
  },
  {
    id:7, emoji:"🏗️☁️", label:"HIGH-TICKET GIG 2 — AWS Infrastructure with Terraform",
    title:"I will build and deploy your production AWS infrastructure using Terraform IaC",
    tags:"aws infrastructure · terraform · iac · aws setup · cloud architecture",
    thumb:{ l1:"AWS Built Right", l2:"With Terraform", sub:"VPC · EKS · RDS · IAM · IaC" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 5 clients

Need your AWS infrastructure built properly — not just working, but secure, scalable, and maintainable as your team grows? I build it as production-grade Terraform that your team can version-control, review, and extend.

What I build:
✅ VPC — multi-AZ subnets, route tables, NAT Gateway, Internet Gateway, NACLs
✅ Compute — EC2 Auto Scaling or EKS cluster with managed node groups
✅ Database — RDS (Multi-AZ, automated backups, encryption, parameter group)
✅ Storage — S3 buckets with lifecycle policies, versioning, and encryption
✅ IAM — least-privilege roles, RBAC, cross-account trust where needed
✅ Secrets — AWS Secrets Manager or Parameter Store integration
✅ Monitoring — CloudWatch alarms + SNS notifications for critical events
✅ Everything as Terraform — version-controlled, repeatable, auditable

Environment options:
• Single environment (dev, staging, or prod)
• Full dev/staging/prod with complete separation
• Multi-account (separate AWS accounts per environment) — Premium

What you receive:
📄 All Terraform code in your repo + remote state (S3 + DynamoDB)
📄 README with architecture overview and usage instructions
📄 Architecture diagram — Premium
📄 Security review pass — least-privilege IAM, encryption, no hardcoded secrets

Why me:
• Standardized AWS infrastructure across all Deloitte client engagements — real enterprise scale
• Designed cross-account IAM for 100+ sub-accounts at Deloitte
• Automated AWS account provisioning: days → minutes
• Stack: Terraform, Ansible, CloudFormation, AWS Organizations, VPC, EKS, RDS, IAM`,
    pkg:[
      ["Package","Core Infra","Full Stack","Production Ready"],
      ["What's included","VPC + EC2/EKS + S3 + IAM + Terraform code","Core + RDS + Secrets Manager + CloudWatch + multi-env","Full stack + multi-account + security review + architecture diagram"],
      ["Price","$270","$480","$750"],
      ["Delivery","5 days","8 days","12 days"],
      ["Revisions","2","3","Unlimited"],
      ["Post-delivery support","7 days","10 days","14 days"],
    ],
    faq:[
      { q:"What do you need from me to start?", a:"Your target cloud region, what the infrastructure needs to host (web app, microservices, data pipeline, etc.), number of environments needed, and rough scale expectations (e.g., expected users, data volume)." },
      { q:"Do you need my AWS credentials?", a:"For the build phase I'll use your sandbox/dev account with appropriate IAM permissions — I'll tell you exactly what permissions I need. I never request more access than the work requires." },
      { q:"Will you use Terraform modules or just flat configs?", a:"Reusable modules with proper variable/output structure. The code is structured so you can add new environments by changing variable files, not by copy-pasting." },
      { q:"What if I need multi-account AWS architecture?", a:"The Premium package covers multi-account setup using AWS Organizations, SCPs, and cross-account IAM roles. I designed this at scale at Deloitte — it's not theoretical." },
      { q:"Can you also set up CI/CD to deploy the infrastructure?", a:"Yes — as an add-on I can wire Terraform plan/apply into GitHub Actions or Jenkins so infrastructure changes go through a PR review + automated apply process." },
      { q:"What security standards does the code meet?", a:"All packages: encryption at rest (RDS, S3, EBS), least-privilege IAM, no hardcoded secrets. Premium adds a full security review pass against AWS Well-Architected Framework security pillar." },
    ],
    reqs:["What will this infrastructure host? (web app, microservices, data pipeline, etc.)","AWS region? (or multi-region?)","How many environments? (dev only, dev+prod, dev+staging+prod)","Do you need multi-account AWS? (separate accounts per env)","Rough scale: expected users or requests per second?","Do you have an existing AWS account to use, or starting fresh?","Any compliance requirements? (HIPAA, SOC2, PCI-DSS, etc.)"],
  },
  {
    id:8, emoji:"☸️🏗️", label:"HIGH-TICKET GIG 3 — Production Kubernetes Setup",
    title:"I will set up a production-ready Kubernetes cluster with Helm, monitoring, and security",
    tags:"kubernetes · production kubernetes · helm · k8s setup · devops",
    thumb:{ l1:"K8s Production", l2:"Set Up Right", sub:"Helm · Prometheus · Grafana · RBAC · Ingress" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 5 clients

Running Kubernetes in production is fundamentally different from running it in a tutorial. RBAC misconfigurations cause outages. No monitoring means blind deployments. No autoscaling means wasted spend or downtime under load. I set it up the way a senior DevOps engineer would on day one at a real company.

What I set up for you:
✅ Cluster provisioning — AKS (Azure), EKS (AWS), or on-prem K8s
✅ Namespaces, RBAC, and ServiceAccount configuration
✅ Helm — chart structure, values files, and deployment strategy
✅ Ingress controller (nginx) + TLS/SSL via cert-manager
✅ Monitoring stack — Prometheus + Grafana + Alertmanager
✅ Logging — Fluent Bit + Elasticsearch or CloudWatch/Azure Monitor
✅ Horizontal Pod Autoscaler (HPA) configuration
✅ Resource requests/limits tuned per workload
✅ Image pull secret configuration (ECR, ACR, Docker Hub)
✅ Network Policies for pod-level traffic control — Premium
✅ Secrets management — Kubernetes Secrets + external secrets operator — Premium

What you receive:
📄 Working Kubernetes cluster with all components deployed and tested
📄 Helm charts for your application deployments
📄 Grafana dashboards for your workloads
📄 Runbook — alerts, scaling, rollback, and common incident procedures

Why me:
• Managed AKS production clusters for PointClickCare — 1,500+ users, 99.9% uptime
• Cut release cycle 25% through Helm chart standardization across 200+ repos
• Deep stack: AKS, EKS, Helm, Prometheus, Grafana, Alertmanager, cert-manager, ArgoCD, Rancher`,
    pkg:[
      ["Package","Cluster Setup","Production Ready","Full Platform"],
      ["What's included","Cluster + namespaces + RBAC + Ingress + TLS","Full setup + Prometheus/Grafana + HPA + logging","Full platform + Network Policies + Secrets operator + runbook"],
      ["Price","$280","$500","$780"],
      ["Delivery","5 days","8 days","12 days"],
      ["Revisions","2","3","Unlimited"],
      ["Post-delivery support","7 days","10 days","14 days"],
    ],
    faq:[
      { q:"What do I need to provide?", a:"Your cloud provider (AWS/Azure/GCP), target cluster size (node count and type), what workloads you're deploying (number of services, rough resource needs), and any existing infrastructure I should connect to." },
      { q:"Do you provision the cluster or set it up on an existing one?", a:"Both options are available. I can provision a new AKS/EKS cluster as Terraform (additional scope), or work on an existing cluster. Specify when ordering." },
      { q:"What monitoring stack do you set up?", a:"Prometheus + Grafana + Alertmanager via the kube-prometheus-stack Helm chart. I configure workload-level dashboards and alerts for CPU/memory/pod health. Dynatrace integration is available as an add-on." },
      { q:"Can you set up ArgoCD for GitOps deployments?", a:"Yes — ArgoCD can replace or supplement Helm-based deployments. Mention it when ordering; it's included in the Full Platform package." },
      { q:"Do you configure TLS/SSL certificates?", a:"Yes — cert-manager with Let's Encrypt (or your own CA) is included in all packages. HTTPS on your Ingress endpoints from day one." },
      { q:"What happens if something breaks after delivery?", a:"The runbook covers the most common failure modes. Message me within the support window for any issues — I'll diagnose and guide you through the fix." },
    ],
    reqs:["Cloud provider: AWS (EKS), Azure (AKS), GCP (GKE), or on-prem?","Cluster size: how many nodes, and what instance type/size?","How many application services will run on the cluster?","Do you have existing infrastructure (VPC, subnets) to deploy into?","What monitoring are you currently using, if any?","Any compliance requirements (HIPAA, SOC2, PCI)?","Timeline — is there a target go-live date?"],
  },
  {
    id:9, emoji:"🔍", label:"HIGH-TICKET GIG 4 — DevOps Audit & Roadmap",
    title:"I will audit your DevOps stack and deliver a prioritized improvement roadmap",
    tags:"devops audit · devops consulting · infrastructure review · cloud audit · devops assessment",
    thumb:{ l1:"DevOps Audit", l2:"Fix What Matters", sub:"Full Stack Review · Prioritized Roadmap · CTO-Level" },
    desc:`🚀 LAUNCH SPECIAL — 50% off for first 5 clients

Not sure why deployments keep breaking? Worried your infrastructure isn't secure? Spending too much on cloud? Considering a platform rewrite but not sure where to start? I audit your entire DevOps stack and deliver a plain-English roadmap — ordered by business impact, not complexity.

What I audit:
✅ CI/CD pipelines — reliability, speed, security gaps, YAML/Groovy quality
✅ Containers — Docker best practices, Kubernetes RBAC, resource configuration
✅ Cloud infrastructure — AWS/Azure architecture, IAM, networking, cost
✅ IaC — Terraform/Ansible structure, drift, best practices
✅ Monitoring — alerting coverage, dashboard quality, mean-time-to-detect gaps
✅ Security posture — secret management, SAST (SonarQube/Fortify), key rotation, RBAC
✅ Artifact management — JFrog Artifactory/Nexus configuration and lifecycle policies
✅ Observability — log coverage, tracing, alert fatigue analysis

What you receive:
📄 Audit report — current state, findings, and risk levels
📄 Prioritized roadmap — what to fix first (quick wins + strategic improvements)
📄 Quick wins list — things you can fix this week
📄 Premium: 60-min walkthrough call + Q&A document

My edge:
I've seen what breaks at scale across healthcare SaaS (PointClickCare), global consulting (Deloitte), and regulated pharma (Roche). I know the difference between a theoretical risk and one that will wake you up at 2am.

I only need read access — zero risk to your environment.`,
    pkg:[
      ["Package","Focused Audit","Full Audit","Audit + Strategy Call"],
      ["What's included","1 area audit (CI/CD or K8s or AWS) + findings report","Complete stack audit + prioritized roadmap + quick wins","Full audit + 60-min call + Q&A document + follow-up support"],
      ["Price","$160","$300","$450"],
      ["Delivery","3 days","5 days","7 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","5 days","7 days","14 days"],
    ],
    faq:[
      { q:"What do I need to share with you?", a:"Access method depends on what we're auditing. For CI/CD: share pipeline YAML files. For K8s: kubeconfig read-only. For AWS: read-only IAM user. For IaC: Terraform/Ansible files. I never need write access." },
      { q:"How do you deliver the report?", a:"Google Doc or PDF — your choice. The report includes a findings table (risk level: High/Medium/Low), a prioritized action list, and for Premium, a recorded walkthrough video." },
      { q:"Will the report be technical enough for my engineers?", a:"Yes — findings include specific file paths, line numbers, commands to run, and references to docs. Your engineers can act on it without guessing." },
      { q:"What if I want you to implement the fixes after the audit?", a:"That's the natural next step. After the audit I can quote individual fix gigs based on the findings. Many clients order an audit first and then hire me to fix the top-priority items." },
      { q:"Can you audit a regulated or compliance-sensitive environment?", a:"Yes — Roche and PointClickCare are both regulated healthcare environments. I understand HIPAA-relevant infrastructure patterns, audit logging, and secure configuration standards." },
      { q:"How long does the audit take?", a:"Focused Audit: 1–2 days of analysis. Full Audit: 3–4 days. I don't pad timelines — if I finish early, I deliver early." },
    ],
    reqs:["Which areas concern you most? (rank: CI/CD, K8s, AWS cost, security, monitoring, IaC)","Cloud provider(s): AWS, Azure, GCP?","Approximate team size and number of microservices/repos","Current monitoring: Prometheus, Datadog, Dynatrace, CloudWatch — what do you have?","What triggered the audit? (incident, growth, compliance requirement, cost spike)","Report format preference: Google Doc or PDF?","Is there a deadline (board presentation, compliance review, etc.)?"],
  },
];

// ─────────────────────────────────────────────────────────────
// BONUS LOW-COMPETITION GIGS
// ─────────────────────────────────────────────────────────────
const BONUS_GIGS = [
  {
    id:10, emoji:"📊", label:"BONUS GIG 1 — Dynatrace APM Setup (LOW COMPETITION)",
    title:"I will set up Dynatrace APM monitoring for your Kubernetes or Azure App Services",
    tags:"dynatrace · apm · monitoring · kubernetes monitoring · observability",
    competition:"Very low — fewer than 50 active sellers on Fiverr for Dynatrace. High demand in enterprise orgs that already have a license.",
    desc:`Most Fiverr sellers can set up Prometheus. Almost none have real Dynatrace experience. You do — and buyers who need Dynatrace are enterprise clients with serious budgets.

What I set up:
✅ Dynatrace OneAgent deployment — Kubernetes (DaemonSet or Operator), Azure App Services, EC2
✅ Kubernetes monitoring — cluster, namespace, workload, and pod-level observability
✅ Application performance monitoring — service maps, distributed traces, anomaly detection
✅ Alert configuration — custom thresholds, notification integrations (email, Slack, PagerDuty)
✅ Dashboard creation — application health, infrastructure, SLO tracking
✅ Management Zone setup for multi-team environments

Why me:
• Deployed Dynatrace across 100+ Azure App Services via PowerShell automation at Deloitte
• Real enterprise-scale Dynatrace experience — not a tutorial setup`,
    pkg:[
      ["Package","OneAgent Setup","Full APM","Enterprise Config"],
      ["What's included","OneAgent deployed + basic dashboards","Full APM + traces + alerts + SLO dashboard","Full setup + management zones + notification integrations + docs"],
      ["Price","$80","$160","$250"],
      ["Delivery","2 days","4 days","6 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","3 days","5 days","7 days"],
    ],
  },
  {
    id:11, emoji:"🔐", label:"BONUS GIG 2 — Fortify / SonarQube DevSecOps (LOW COMPETITION)",
    title:"I will integrate Fortify or SonarQube security scanning into your CI/CD pipeline",
    tags:"sonarqube · fortify · devsecops · sast · security scanning",
    competition:"Very low — DevSecOps tools like Fortify have almost no specialized sellers on Fiverr. Buyers are compliance engineers and regulated-industry teams with large budgets.",
    desc:`DevSecOps is the fastest-growing area in DevOps hiring — and almost no Fiverr sellers have real Fortify or enterprise SonarQube experience. You do.

What I set up:
✅ SonarQube — server setup, scanner integration (Maven, Gradle, npm, Python), quality gates
✅ SonarQube CI integration — GitHub Actions, Jenkins, GitLab CI pipeline scanning
✅ Quality gate policies — fail builds on critical vulnerability thresholds
✅ Fortify SSC/FoD — scan configuration, pipeline integration, results triage
✅ GitHub Advanced Security — code scanning, secret scanning, dependency review
✅ NexusIQ (Sonatype) — dependency vulnerability scanning in pipelines
✅ OWASP Dependency Check integration

Why me:
• Enforced SonarQube + Fortify gates blocking vulnerable code at Roche — regulated pharma
• Configured Fortify SSC/FoD/WebInspect at enterprise scale
• NexusIQ integration experience from healthcare SaaS environments`,
    pkg:[
      ["Package","SonarQube Setup","Full SAST Pipeline","Enterprise DevSecOps"],
      ["What's included","SonarQube + scanner + basic quality gate","SonarQube + CI integration + blocking quality gate + report","Full DevSecOps: SonarQube + Fortify/GH Advanced Security + SBOM + docs"],
      ["Price","$90","$170","$280"],
      ["Delivery","2 days","4 days","7 days"],
      ["Revisions","1","2","Unlimited"],
      ["Post-delivery support","3 days","5 days","7 days"],
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// THUMBNAILS
// ─────────────────────────────────────────────────────────────
const THUMBS = [
  { gig:"Docker Fix",      l1:"Docker Broken?",    l2:"Fixed Fast",         sub:"Dockerfile · Compose · Container Errors",     icons:"Docker whale" },
  { gig:"K8s Debug",       l1:"K8s Failing?",      l2:"Root Cause Found",   sub:"CrashLoop · OOMKilled · Helm · Ingress",       icons:"K8s wheel" },
  { gig:"GitHub Actions",  l1:"Pipeline Broken?",  l2:"Back Online Fast",   sub:"GitHub Actions · GitLab CI · YAML · Secrets",  icons:"GitHub + GitLab" },
  { gig:"Jenkins",         l1:"Jenkins Broken?",   l2:"Pipeline Fixed",     sub:"Groovy · Shared Libs · Agents · Multibranch",  icons:"Jenkins logo" },
  { gig:"Terraform",       l1:"Terraform Broken?", l2:"State Fixed",        sub:"State Errors · Modules · AWS · Azure",         icons:"Terraform diamond" },
  { gig:"AWS Issues",      l1:"AWS Broken?",       l2:"Fixed & Secured",    sub:"IAM · EC2 · EKS · RDS · Multi-Account",        icons:"AWS smile" },
  { gig:"Full Pipeline",   l1:"Code → Cloud",      l2:"Full Pipeline Built",sub:"Docker · CI/CD · Kubernetes · End-to-End",     icons:"All 4 tool logos" },
  { gig:"AWS Infra",       l1:"AWS Built Right",   l2:"With Terraform",     sub:"VPC · EKS · RDS · IAM · IaC",                  icons:"AWS + Terraform" },
  { gig:"K8s Production",  l1:"K8s Production",    l2:"Set Up Right",       sub:"Helm · Prometheus · Grafana · RBAC",           icons:"K8s wheel" },
  { gig:"DevOps Audit",    l1:"DevOps Audit",      l2:"Fix What Matters",   sub:"Full Stack Review · Prioritized Roadmap",      icons:"Magnifier icon" },
];

// ─────────────────────────────────────────────────────────────
// 7-DAY LAUNCH PLAN
// ─────────────────────────────────────────────────────────────
const SEVENDAY = [
  { day:"DAY 1 — LAUNCH DAY", bg:"#D9EFE3", color:"#1E6B3C", items:[
    "Complete your Fiverr profile to 100% — photo, bio, headline, skills, LinkedIn, GitHub, YouTube",
    "Publish ALL 10 gigs in one session (Fiverr rewards accounts that launch multiple gigs at once)",
    "Enable Fiverr mobile app notifications — every message must get a response within 1 hour",
    "Post LinkedIn launch announcement: 'I just launched on Fiverr — here's what I offer' + link",
    "Pin the LinkedIn post",
  ]},
  { day:"DAY 2 — ACTIVATE BUYER REQUESTS", bg:"#D6E4F0", color:"#1F4E79", items:[
    "Send 10 Buyer Requests: 5 at 8–9am, 5 at 7–8pm (peak buyer activity times)",
    "Buyer Request template: 1-sentence hook ('I fixed this exact issue at PointClickCare') + specific solution + proof + CTA",
    "Post on r/forhire with your full gig list and GitHub link",
    "Tweet/X post: 'Just launched my DevOps Fiverr profile — fixes and builds for Docker, K8s, AWS, Terraform, CI/CD' + link",
  ]},
  { day:"DAY 3 — NETWORK OUTREACH", bg:"#FFF8E8", color:"#B8460B", items:[
    "Message 10 former colleagues / LinkedIn connections: 'Do you know anyone who needs DevOps help? I just launched on Fiverr.'",
    "Offer your first 3 orders at launch price — ask for an honest review if they're happy",
    "Send 10 more Buyer Requests",
    "Join r/devops, r/kubernetes, r/aws, r/terraform — answer questions, add Fiverr link in your profile",
  ]},
  { day:"DAY 4–5 — FIRST ORDERS", bg:"#E8F4FD", color:"#1F4E79", items:[
    "Continue 10 Buyer Requests/day",
    "If first order arrives: START WITHIN 2 HOURS of receiving requirements (fast start = mentioned in reviews)",
    "Over-deliver: add a prevention checklist or quick reference doc the buyer didn't ask for",
    "Post review request 24 hours after delivery ('A quick review would mean a lot — it helps me reach more clients')",
  ]},
  { day:"DAY 6–7 — ANALYTICS REVIEW", bg:"#D9EFE3", color:"#1E6B3C", items:[
    "Check Fiverr Analytics: which gigs have impressions? Which have clicks? Which have zero?",
    "Zero impressions = keyword problem — revise the title to match Fiverr autocomplete search terms exactly",
    "Low clicks despite impressions = thumbnail problem — A/B test a new thumbnail on the weakest gig",
    "Identify your 2 highest-impression gigs — these will be your primary focus for week 2",
    "Post a LinkedIn 'lesson learned' post about a real DevOps problem you solved — subtle CTA to your Fiverr",
  ]},
];

// ─────────────────────────────────────────────────────────────
// 30-DAY PLAN
// ─────────────────────────────────────────────────────────────
const WEEKS = [
  { label:"WEEK 1 — LAUNCH", bg:"#D9EFE3", metric:"Target: 3–6 orders | 0% cancellation | 100% response rate",
    daily:["Enable Fiverr app — reply to EVERY message within 1 hour","Send 10 Buyer Requests/day: 5 at 8–9am + 5 at 7–8pm"],
    weekly:["Day 1: Profile 100% complete → publish all 10 gigs → LinkedIn announcement","Day 2: Start Buyer Requests, r/forhire post, Twitter/X launch post","Day 3: Network outreach to 10 former colleagues","Day 4–5: Deliver first orders — start within 2 hours of receiving requirements","Day 6–7: Check analytics — which gigs have impressions? Fix zero-impression titles"] },
  { label:"WEEK 2 — BUILD REVIEWS", bg:"#D6E4F0", metric:"Target: 8–14 total orders | First 5-star reviews appearing",
    daily:["10 Buyer Requests/day","Reply within 1 hour to all messages","Send review request 24h after every delivery"],
    weekly:["LinkedIn value post: 'How I fixed CrashLoopBackOff in production' — soft CTA to K8s gig","Identify lowest-CTR thumbnail → redesign it (Canva, 30 min)","Over-deliver every order: add a bonus doc no one asked for","Once at 5 reviews: update ALL gig descriptions to include '⭐ 5-star rated'"] },
  { label:"WEEK 3 — OPTIMIZE", bg:"#FFF8E8", metric:"Target: 15–22 total orders | Algorithm sending first organic traffic",
    daily:["10 Buyer Requests/day","Monitor Fiverr Analytics: impressions vs clicks vs orders per gig"],
    weekly:["LinkedIn post about your top-performing gig topic (Terraform, K8s, AWS)","Raise Basic price on your best-performing gig by $10–15 (test algorithm response)","Write a Dev.to or Medium article about a DevOps fix — link to your relevant gig","Consider adding a niche gig: Dynatrace, Fortify DevSecOps, or ELK Stack setup"] },
  { label:"WEEK 4 — SCALE", bg:"#D6E4F0", metric:"Target: 25–35 total orders | $1,000–$2,500 earned | Daily organic traffic",
    daily:["10 Buyer Requests/day","Maintain <1 hour reply time"],
    weekly:["10+ reviews: remove LAUNCH SPECIAL banners → replace with 'Trusted by [X] clients | 5.0 ⭐'","Raise ALL Basic prices by $15–20","Consider Fiverr Promoted Gigs (paid ads) for your top 2 traffic gigs","Request a LinkedIn recommendation from a current or past colleague","Analyse which niche tools (Dynatrace, Fortify, ELK) have low Fiverr competition — create a niche gig"] },
];

// ─────────────────────────────────────────────────────────────
// THUMBNAIL TAB COMPONENT
// ─────────────────────────────────────────────────────────────
const GIG_PROMPTS = [
  { gig:"GIG 1 — Docker Fix",         top:"Docker Broken?",    bot:"Fixed Fast",          icons:"Docker whale logo, Docker Compose icon",                       accent:"#2196F3" },
  { gig:"GIG 2 — Kubernetes Debug",   top:"K8s Failing?",      bot:"Root Cause Found",    icons:"Kubernetes wheel logo, Helm icon",                             accent:"#326CE5" },
  { gig:"GIG 3 — GitHub Actions Fix", top:"Pipeline Broken?",  bot:"Back Online Fast",    icons:"GitHub Octocat logo, GitLab fox logo",                         accent:"#2DA44E" },
  { gig:"GIG 4 — Jenkins Fix",        top:"Jenkins Broken?",   bot:"Pipeline Fixed",      icons:"Jenkins butler logo, Groovy icon",                             accent:"#D33833" },
  { gig:"GIG 5 — Terraform Fix",      top:"Terraform Broken?", bot:"State Fixed",         icons:"Terraform purple diamond logo, HashiCorp icon",                accent:"#7B42BC" },
  { gig:"GIG 6 — AWS Fix",            top:"AWS Broken?",       bot:"Fixed & Secured",     icons:"AWS smile logo, IAM shield icon",                              accent:"#FF9900" },
  { gig:"GIG 7 — Full Pipeline",      top:"Code → Cloud",      bot:"Full Pipeline Built", icons:"Docker whale, GitHub Actions logo, Kubernetes wheel, Helm icon",accent:"#2E75B6" },
  { gig:"GIG 8 — AWS Infrastructure", top:"AWS Built Right",   bot:"With Terraform",      icons:"AWS smile logo, Terraform diamond logo",                       accent:"#FF9900" },
  { gig:"GIG 9 — K8s Production",     top:"K8s Production",    bot:"Set Up Right",        icons:"Kubernetes wheel, Prometheus fire logo, Grafana logo",         accent:"#326CE5" },
  { gig:"GIG 10 — DevOps Audit",      top:"DevOps Audit",      bot:"Fix What Matters",    icons:"magnifying glass icon, checklist icon, DevOps infinity loop",  accent:"#1E6B3C" },
];

const buildPrompt = (top, bot, icons, accent) =>
`Create a professional Fiverr gig thumbnail image. Exact specifications:

CANVAS: 1280x769 pixels, landscape orientation.

BACKGROUND: Deep dark navy blue (#0D1B2A) with a subtle dark radial gradient from center (slightly lighter #1A2E45) to edges. Add faint diagonal light-streak lines across the background at 5% opacity for depth — like a tech circuit grid. No cheap gradients.

TOP HEADLINE TEXT:
— Text: "${top}"
— Font style: Ultra-bold modern sans-serif (Poppins ExtraBold or Montserrat Black)
— Size: Very large and dominant — approximately 40% of canvas height
— Color: Pure white (#FFFFFF)
— Position: Upper-center of canvas with padding from top
— Add a thin glowing drop shadow in ${accent} at 40% opacity behind the text

BOTTOM HEADLINE TEXT:
— Text: "${bot}"
— Font style: Bold sans-serif, about 60% the size of the top headline
— Color: ${accent} (fully saturated, bright)
— Position: Directly below the top headline, center-aligned
— Add a soft glow/halo in ${accent} at 25% opacity around this text

ICON ROW (bottom section):
— Show flat, clean, recognizable tech icons for: ${icons}
— Icons in white or their original brand color on the dark background
— Arrange horizontally in a neat centered row
— Icon height approximately 8% of canvas height — they support the text, not compete with it
— Add a thin horizontal rule (#FFFFFF at 15% opacity) above the icon row as a separator

STYLE RULES (strictly follow):
— NO stock photos, NO human faces, NO gradients that look like PowerPoint
— Clean, high-contrast, tech-forward — like a senior engineer designed it
— ALL text must be fully legible when the image is scaled to 100px width
— Maximum 6 words total visible across both headlines
— Use generous negative space — do not crowd the canvas
— Premium, authoritative feel — not playful or colorful

OUTPUT: PNG, 1280×769px`;

function ThumbTab({ selGig, setSelGig }) {
  const g = GIG_PROMPTS[selGig];
  return (
    <div>
      <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>ChatGPT Thumbnail Prompt Generator</div>
      <AlgoTip>Thumbnail CTR is the highest-weighted early algorithm signal. A buyer sees your thumbnail before reading your title. Generate all 10 with ChatGPT (DALL-E 3) — each takes 30 seconds.</AlgoTip>

      <Card title="How to use" bg="#E8F4FD">
        <div style={{ fontSize:12, lineHeight:1.9 }}>
          1. Select a gig below → the full prompt auto-updates<br/>
          2. Click <strong>Copy</strong> → paste into ChatGPT (GPT-4o with image generation enabled)<br/>
          3. If text rendering is off, reply: <em>"Regenerate with exact text perfectly legible as specified"</em><br/>
          4. Download → upload directly to Fiverr gig media (PNG, max 5MB, min 712×430px)
        </div>
      </Card>

      <div style={{ fontWeight:700, color:"#1F4E79", fontSize:13, margin:"14px 0 8px" }}>Select Gig</div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
        {GIG_PROMPTS.map((gp,i) => (
          <button key={i} onClick={() => setSelGig(i)} style={{
            padding:"6px 12px", fontSize:11, fontWeight:600, cursor:"pointer", borderRadius:20,
            border: selGig===i?`2px solid ${gp.accent}`:"1px solid #CCC",
            background: selGig===i?gp.accent:"white",
            color: selGig===i?"white":"#595959",
            transition:"all 0.15s",
          }}>{gp.gig}</button>
        ))}
      </div>

      <div style={{ background:"#E8F4FD", border:"1px solid #2E75B6", borderRadius:6, padding:"10px 16px", marginBottom:8 }}>
        <span style={{ fontWeight:700, color:"#1F4E79", fontSize:13 }}>{g.gig}</span>
        <div style={{ fontSize:12, color:"#595959", marginTop:4, display:"flex", gap:16, flexWrap:"wrap" }}>
          <span>Top headline: <strong style={{color:"#1F4E79"}}>{g.top}</strong></span>
          <span>Bottom headline: <strong style={{color:g.accent}}>{g.bot}</strong></span>
          <span>Accent: <span style={{background:g.accent,color:"white",padding:"1px 8px",borderRadius:3,fontSize:11,fontWeight:700}}>{g.accent}</span></span>
        </div>
      </div>

      <CodeBlock>{buildPrompt(g.top, g.bot, g.icons, g.accent)}</CodeBlock>

      <Card title="All 10 Gigs — Quick Reference (click row to load prompt)" bg="#F6F8FA" border="#CCC" titleColor="#1F4E79">
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:11.5 }}>
            <thead>
              <tr style={{ background:"#1F4E79", color:"white" }}>
                {["#","Gig","Top Headline","Bottom Headline","Accent"].map(h=><th key={h} style={{padding:"7px 10px",textAlign:"left"}}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {GIG_PROMPTS.map((gp,i)=>(
                <tr key={i} onClick={()=>setSelGig(i)} style={{ background:selGig===i?"#EEF5FB":i%2===0?"#F7FAFD":"white", cursor:"pointer", outline:selGig===i?`2px solid ${gp.accent}`:"none" }}>
                  <td style={{ padding:"7px 10px", fontWeight:700, color:"#2E75B6", borderBottom:"1px solid #EEE" }}>{i+1}</td>
                  <td style={{ padding:"7px 10px", fontWeight:700, color:"#1F4E79", borderBottom:"1px solid #EEE" }}>{gp.gig}</td>
                  <td style={{ padding:"7px 10px", fontWeight:700, borderBottom:"1px solid #EEE" }}>{gp.top}</td>
                  <td style={{ padding:"7px 10px", fontWeight:700, color:gp.accent, borderBottom:"1px solid #EEE" }}>{gp.bot}</td>
                  <td style={{ padding:"7px 10px", borderBottom:"1px solid #EEE" }}>
                    <span style={{background:gp.accent,color:"white",padding:"2px 8px",borderRadius:3,fontSize:11,fontWeight:700}}>{gp.accent}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="ChatGPT Tips for Sharpest Results" bg="#FFF8E8" border="#F0A500" titleColor="#B8460B">
        {[
          "Use GPT-4o — best DALL-E 3 text rendering. Avoid GPT-4-turbo for images.",
          "If text is blurry or wrong: reply 'Regenerate — top headline must say exactly: [top text] and bottom must say: [bottom text]. Both fully legible.'",
          "If background is too light: reply 'Make background pure #0D1B2A dark navy — much darker.'",
          "If icons are wrong or missing: reply 'Add the specific tech icons from the original prompt in the bottom icon row.'",
          "Generate 2–3 variations → pick the one with sharpest text at thumbnail scale.",
          "Final check: zoom out your browser to 20% — if both headlines are still readable, it's good to upload.",
        ].map((t,i)=><div key={i} style={{fontSize:12,marginBottom:5}}>• {t}</div>)}
      </Card>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function FiverrKitV4() {
  const [active, setActive] = useState(0);
  const [openGig, setOpenGig] = useState(null);
  const [openTab, setOpenTab] = useState("desc");
  const [selGig, setSelGig] = useState(0);

  const tab = (i) => ({
    padding:"8px 11px", cursor:"pointer", fontSize:11, fontWeight:600,
    color:active===i?"#1F4E79":"#595959", background:"none", border:"none",
    borderBottom:active===i?"3px solid #2E75B6":"3px solid transparent", whiteSpace:"nowrap",
  });

  const GigCard = ({ gig, accentBorder="#2E75B6", accentBg="#E8F4FD" }) => {
    const isOpen = openGig===gig.id;
    return (
      <div style={{ marginBottom:12 }}>
        <div onClick={() => { setOpenGig(isOpen?null:gig.id); setOpenTab("desc"); }}
          style={{ background:isOpen?accentBg:"white", border:`1px solid ${accentBorder}`, borderLeft:`4px solid ${accentBorder}`, borderRadius:isOpen?'6px 6px 0 0':6, padding:"12px 16px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontWeight:700, color:"#1F4E79", fontSize:13 }}>{gig.emoji} {gig.label}</span>
          <span style={{ color:accentBorder, fontSize:15 }}>{isOpen?"▲":"▼"}</span>
        </div>
        {isOpen && (
          <div style={{ border:`1px solid ${accentBorder}`, borderTop:"none", borderRadius:"0 0 6px 6px", background:"white" }}>
            <div style={{ display:"flex", borderBottom:"1px solid #EEE", background:"#FAFBFC" }}>
              {["desc","pkg","faq","reqs"].map(t => (
                <button key={t} onClick={() => setOpenTab(t)} style={{ padding:"8px 14px", border:"none", background:"none", cursor:"pointer", fontSize:11.5, fontWeight:600, color:openTab===t?"#1F4E79":"#888", borderBottom:openTab===t?"3px solid #2E75B6":"3px solid transparent" }}>
                  {t==="desc"?"Description":t==="pkg"?"Packages":t==="faq"?"FAQ":"Requirements"}
                </button>
              ))}
            </div>
            <div style={{ padding:16 }}>
              {openTab==="desc" && (
                <>
                  <div style={{ fontSize:11, fontWeight:700, color:"#595959", marginBottom:4, textTransform:"uppercase" }}>GIG TITLE</div>
                  <div style={{ position:"relative", marginBottom:12 }}>
                    <div style={{ background:"#F0F6FB", border:"1px solid #C8DFF0", borderRadius:4, padding:"10px 50px 10px 12px", fontSize:13, fontWeight:600, color:"#1F4E79" }}>{gig.title}</div>
                    <CopyBtn text={gig.title} />
                  </div>
                  <Label k="Search Tags" v={gig.tags} />
                  {gig.competition && <Card bg="#FFF8E8" border="#F0A500" titleColor="#B8460B" title="🏆 Why This Gig Has Low Competition">{<div style={{fontSize:12}}>{gig.competition}</div>}</Card>}
                  <div style={{ fontSize:11, fontWeight:700, color:"#595959", margin:"10px 0 4px", textTransform:"uppercase" }}>DESCRIPTION</div>
                  <CodeBlock>{gig.desc}</CodeBlock>
                  <div style={{ background:"#FFF8E8", border:"1px solid #F0A500", borderRadius:4, padding:"6px 10px", fontSize:11, marginTop:8 }}>
                    <span style={{ fontWeight:700, color:"#B8460B" }}>Gig Extras: </span>Rush 12h (+$20–30) · Video call walkthrough (+$35) · Extended 30-day support (+$40) · Detailed runbook (+$25)
                  </div>
                </>
              )}
              {openTab==="pkg" && <PkgTable rows={gig.pkg} />}
              {openTab==="faq" && (gig.faq ? <FAQ items={gig.faq} /> : <div style={{fontSize:12,color:"#888"}}>No FAQ defined for this gig yet.</div>)}
              {openTab==="reqs" && gig.reqs && (
                <div style={{ background:"#F6F8FA", border:"1px solid #DDD", borderLeft:"4px solid #2E75B6", borderRadius:4, padding:"10px 14px" }}>
                  <div style={{ fontSize:11, fontWeight:700, color:"#1F4E79", marginBottom:8 }}>BUYER REQUIREMENTS — shown to buyer immediately after ordering</div>
                  {gig.reqs.map((r,i) => <div key={i} style={{ fontSize:12, marginBottom:5 }}>{i+1}. {r}</div>)}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ fontFamily:"Arial, sans-serif", maxWidth:960, margin:"0 auto", background:"#FAFBFC", minHeight:"100vh" }}>
      {/* Header */}
      <div style={{ background:"linear-gradient(135deg, #1F4E79 0%, #2E75B6 100%)", color:"white", padding:"18px 24px 12px" }}>
        <div style={{ fontSize:20, fontWeight:800, letterSpacing:-0.5 }}>
          VIJAYA B — FIVERR KIT v4
          <span style={{ background:"rgba(255,255,255,0.2)", borderRadius:12, padding:"2px 10px", fontSize:11, fontWeight:600, marginLeft:8 }}>10 Gigs · Enterprise-Grade · Algorithm-Optimized</span>
        </div>
        <div style={{ fontSize:11.5, opacity:0.85, marginTop:4 }}>6 Traffic Gigs · 4 High-Ticket Gigs · 2 Bonus Low-Competition Gigs · Per-Gig FAQ · 7-Day + 30-Day Plan</div>
        <div style={{ display:"flex", gap:8, marginTop:10, flexWrap:"wrap" }}>
          {["7+ yrs Enterprise","PointClickCare + Deloitte + Roche","10 Gigs","Per-Gig FAQ + Requirements","Thumbnail Strategy"].map(t => (
            <span key={t} style={{ background:"rgba(255,255,255,0.18)", borderRadius:20, padding:"2px 10px", fontSize:11, fontWeight:600 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background:"white", borderBottom:"1px solid #E0E0E0", overflowX:"auto", display:"flex" }}>
        {SECTIONS.map((s,i) => <button key={i} style={tab(i)} onClick={() => setActive(i)}>{s}</button>)}
      </div>

      <div style={{ padding:"20px 24px" }}>

        {/* TAB 0 — PROFILE */}
        {active===0 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>Fiverr Profile — Complete Before Publishing Any Gig</div>
            <AlgoTip>Fiverr measures profile completeness and uses it as a search ranking signal. A 100% complete profile before your first gig = higher starting rank. A profile video alone boosts conversion by ~40% according to Fiverr internal data.</AlgoTip>

            <div style={{ marginTop:16, marginBottom:6, fontWeight:700, color:"#1F4E79", fontSize:14 }}>Headline (160 chars max)</div>
            <CodeBlock>{HEADLINE}</CodeBlock>
            <div style={{ fontSize:11, color:"#595959", marginBottom:14 }}>
              ✓ "Senior DevOps Engineer" front-loaded — highest search volume term &nbsp;|&nbsp; ✓ 5 high-demand keywords, each indexed &nbsp;|&nbsp; ✓ 3 employer names = instant credibility signal &nbsp;|&nbsp; ✓ 156 chars
            </div>

            <div style={{ marginBottom:6, fontWeight:700, color:"#1F4E79", fontSize:14 }}>Full Profile Bio (copy-paste ready)</div>
            <CodeBlock>{BIO}</CodeBlock>

            <div style={{ marginBottom:6, marginTop:16, fontWeight:700, color:"#1F4E79", fontSize:14 }}>Skills — Add All 15 in This Order</div>
            <AlgoTip>Each skill is a separate searchable tag. Fiverr matches your profile to buyer searches beyond your gig titles. Front-load the highest-demand skills.</AlgoTip>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6, margin:"10px 0" }}>
              {SKILLS_LIST.map(([n,s]) => (
                <div key={n} style={{ background:"#E8F4FD", border:"1px solid #C8DFF0", borderRadius:4, padding:"6px 10px", fontSize:12, display:"flex", gap:8 }}>
                  <span style={{ fontWeight:700, color:"#2E75B6", minWidth:22 }}>{n}.</span><span>{s}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:6, marginTop:16, fontWeight:700, color:"#1F4E79", fontSize:14 }}>Full Tech Stack (use in gig descriptions and buyer messages)</div>
            <div style={{ border:"1px solid #D0E4F4", borderRadius:6, overflow:"hidden" }}>
              {Object.entries(TECH_STACK).map(([cat, tools], i) => (
                <div key={cat} style={{ display:"flex", borderBottom:i<Object.keys(TECH_STACK).length-1?"1px solid #E0EEF8":"none", fontSize:12 }}>
                  <div style={{ background:i%2===0?"#D6E4F0":"#E8F4FD", padding:"8px 12px", minWidth:180, fontWeight:700, color:"#1F4E79", fontSize:11 }}>{cat}</div>
                  <div style={{ padding:"8px 12px", flex:1 }}>{tools}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:6, marginTop:16, fontWeight:700, color:"#1F4E79", fontSize:14 }}>Linked Accounts</div>
            {[
              ["GitHub","CRITICAL — links to your 7 AI DevOps tools. Buyers check this before ordering. It's your portfolio."],
              ["LinkedIn","PointClickCare + Deloitte + Roche visible immediately. Most powerful trust signal for B2B buyers."],
              ["YouTube","Even low-view count signals professionalism and depth. Demo videos convert skeptical buyers."],
              ["Certifications","AWS, CKA/CKAD, Terraform Associate, or any others you hold."],
              ["Education","BSc Electronics Engineering + Leadership Management PG Certificate."],
            ].map(([k,v]) => <Label key={k} k={k} v={v} />)}
          </div>
        )}

        {/* TAB 1 — ALGORITHM */}
        {active===1 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>How the Fiverr Algorithm Works — and How to Win It</div>
            <Card bg="#E8F4FD">
              <div style={{ fontSize:12 }}>Fiverr gives every new account an invisible 30-day boost — your gigs rank higher than your zero-review count would normally justify. Perform well in this window and the algorithm continues promoting you. Poor metrics (slow replies, cancellations) bury you for months.</div>
            </Card>
            <div style={{ overflowX:"auto", margin:"14px 0" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead>
                  <tr style={{ background:"#1F4E79", color:"white" }}>
                    {["Factor","Priority","What It Measures","How to Win"].map(h => <th key={h} style={{ padding:"9px 10px", textAlign:"left" }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Click-Through Rate (CTR)","🔴 Critical","How many buyers click your gig in search","Strong thumbnail + specific benefit title + competitive launch price"],
                    ["Order Completion Rate","🔴 Critical","% of orders completed without cancellation","Clarify scope BEFORE buyer orders. Never cancel. Resolve issues by communicating."],
                    ["Response Rate & Time","🔴 Critical","How fast + how often you reply","Reply within 1 hour always. Even 'Got it, reviewing now' counts."],
                    ["Review Score & Volume","🟠 High","Average rating + total review count","Over-deliver every order. Request review 24h after delivery."],
                    ["Keyword Relevance","🟠 High","Title, description, and tags vs buyer search","Use exact buyer-language. Research Fiverr autocomplete. Match problem terms."],
                    ["Profile Completeness","🟡 Medium","% of profile fields filled","100% complete before publishing gig 1. Profile video adds extra boost."],
                    ["Buyer Satisfaction Score","🟡 Medium","Private: reviews + repeats + tips combined","Deliver above expectations. Documentation, speed, and follow-up all feed this."],
                    ["Gig Activity / Recency","🟡 Medium","Orders, messages, edits — how recent","Send buyer requests daily. Edit a gig description monthly to signal activity."],
                  ].map(([f,w,m,h],i) => (
                    <tr key={i} style={{ background:i%2===0?"#F7FAFD":"white" }}>
                      <td style={{ padding:"8px 10px", fontWeight:700, color:"#1F4E79", borderBottom:"1px solid #EEE" }}>{f}</td>
                      <td style={{ padding:"8px 10px", borderBottom:"1px solid #EEE", whiteSpace:"nowrap" }}>{w}</td>
                      <td style={{ padding:"8px 10px", color:"#595959", borderBottom:"1px solid #EEE" }}>{m}</td>
                      <td style={{ padding:"8px 10px", borderBottom:"1px solid #EEE" }}>{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <AlgoTip>The fastest way to climb the algorithm as a new seller: 100% response rate + 100% completion rate in the first 30 days. These two alone keep Fiverr promoting you through the new seller window.</AlgoTip>
            <Card title="Top Buyer Search Keywords — by Category" bg="#E8F4FD">
              <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, marginTop:4 }}>
                {[
                  ["High Volume (use in titles)","docker, kubernetes, aws, terraform, devops, cicd, jenkins, github actions"],
                  ["Problem-Based (high CTR)","crashloopbackoff, terraform state error, docker build error, oomkilled, jenkins pipeline failure, github actions fix"],
                  ["Outcome-Based","fix docker, debug kubernetes, reduce aws cost, setup pipeline, aws infrastructure"],
                  ["Niche/Low Competition","dynatrace monitoring, fortify security, sonarqube pipeline, elk stack setup, ansible automation"],
                ].map(([cat, words]) => (
                  <div key={cat} style={{ background:"#F0F6FB", border:"1px solid #D0E4F4", borderRadius:4, padding:"10px 12px" }}>
                    <div style={{ fontWeight:700, color:"#1F4E79", fontSize:11, marginBottom:6 }}>{cat}</div>
                    <div style={{ fontSize:11, color:"#595959", lineHeight:2 }}>{words.split(", ").map((w,i) => <span key={i} style={{ display:"block" }}>• {w}</span>)}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* TAB 2 — POSITIONING */}
        {active===2 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>Your Specialist Positioning</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, border:"1px solid #CCC", borderRadius:6, overflow:"hidden", margin:"10px 0", fontSize:12 }}>
              <div style={{ background:"#D9EFE3", padding:"8px 12px", fontWeight:700, color:"#1E6B3C" }}>✅ SPECIALIST WINS</div>
              <div style={{ background:"#FDE9E9", padding:"8px 12px", fontWeight:700, color:"#B8460B", borderLeft:"1px solid #CCC" }}>❌ GENERALIST LOSES</div>
              <div style={{ padding:"10px 12px" }}>
                {["Fiverr search returns specialists first — keywords are specific","Buyers paying $200+ trust specialists, not generalists","Your Roche/Deloitte/PointClickCare experience IS specialist depth","Specialists command 3–5x higher prices","Easier to write compelling, credible gig descriptions"].map((t,i)=><div key={i} style={{marginBottom:5}}>• {t}</div>)}
              </div>
              <div style={{ padding:"10px 12px", borderLeft:"1px solid #CCC" }}>
                {["'I do everything DevOps' — zero reason to choose you","Generalist gigs compete with 10,000+ sellers","Impossible to differentiate on price alone","Buyers fear a generalist will guess rather than know","No clear proof point in your gig description"].map((t,i)=><div key={i} style={{marginBottom:5}}>• {t}</div>)}
              </div>
            </div>
            <div style={{ marginBottom:6, marginTop:14, fontWeight:700, color:"#1F4E79", fontSize:14 }}>Your Positioning Statement (use in bio, buyer requests, intro messages)</div>
            <CodeBlock>{`I am a Senior DevOps Engineer who specializes in fixing infrastructure failures and building production-grade DevOps platforms — Docker, Kubernetes, AWS, CI/CD pipelines (GitHub Actions, Jenkins, GitLab CI), Terraform, DevSecOps (SonarQube, Fortify), and monitoring (Prometheus, Grafana, Dynatrace).

My edge: 7+ years of enterprise experience at PointClickCare (healthcare SaaS, 1,500+ users), Deloitte (50+ AWS accounts, global scale), and Roche (regulated pharma, strict compliance) + 7 AI-powered DevOps tools in my GitHub portfolio.

I don't theorize — I apply solutions I've already proven under production pressure.`}</CodeBlock>
            <AlgoTip>Your Fortify, Dynatrace, and ELK experience gives you gig opportunities that 95% of Fiverr DevOps sellers can't match. The bonus gigs (Dynatrace, Fortify) have fewer than 50 competitors on Fiverr vs 2,000+ for generic Docker gigs.</AlgoTip>
            <Card title="Gig Portfolio Strategy — Why 6+4 Works" bg="#E8F4FD">
              <div style={{ fontSize:12, lineHeight:1.9 }}>
                <strong>6 Traffic Gigs</strong> — problem-based titles that match exact buyer search queries. High order volume, fast reviews, fuel the algorithm.<br/>
                <strong>4 High-Ticket Gigs</strong> — solution-based titles targeting CTOs, founders, and engineering managers. $200–$780 orders, fewer competitors, bigger budgets.<br/>
                <strong>Strategy:</strong> Traffic gigs build reviews and algorithm rank in week 1–2. High-ticket gigs generate revenue in week 3–4 once you have social proof. Reviews on traffic gigs convert high-ticket buyers.
              </div>
            </Card>
          </div>
        )}

        {/* TAB 3 — TRAFFIC GIGS */}
        {active===3 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>6 Traffic Gigs — Problem-Based, High Search Volume</div>
            <div style={{ fontSize:12, color:"#595959", marginBottom:4 }}>Each title matches exact Fiverr buyer search queries. Click any gig to expand. Use the tabs inside to switch between Description, Packages, FAQ, and Requirements.</div>
            <AlgoTip>For traffic gigs, the title is everything. "I will fix your Docker container errors" outperforms "I will help with Docker" — buyers search for their exact problem, not a generic service.</AlgoTip>
            {TRAFFIC_GIGS.map(g => <GigCard key={g.id} gig={g} />)}
          </div>
        )}

        {/* TAB 4 — HIGH-TICKET GIGS */}
        {active===4 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>4 High-Ticket Gigs — Solution-Based, CTO & Founder Buyers</div>
            <Card bg="#FFF8E8" border="#F0A500" titleColor="#B8460B" title="Who buys these gigs">
              <div style={{ fontSize:12 }}>CTOs, engineering managers, and technical founders who need a complete solution, not a spot fix. They search "set up my DevOps pipeline" or "build my AWS infrastructure". Average order value: $220–$780. They read gig descriptions carefully and have the budget to pay for someone who clearly knows what they're doing.</div>
            </Card>
            {HIGHTICKET_GIGS.map(g => <GigCard key={g.id} gig={g} accentBorder="#F0A500" accentBg="#FFF8E8" />)}
            <AlgoTip>High-ticket gigs need at least 5 reviews before they convert well. Spend week 1–2 collecting reviews on traffic gigs, then focus outreach on high-ticket gigs from week 3 onwards.</AlgoTip>
          </div>
        )}

        {/* TAB 5 — BONUS GIGS */}
        {active===5 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>2 Bonus Low-Competition Gigs — Your Unique Edge</div>
            <Card bg="#D9EFE3" border="#1E6B3C" titleColor="#1E6B3C" title="Why These Gigs Are Valuable">
              <div style={{ fontSize:12 }}>Dynatrace and Fortify are enterprise tools. The buyers who need them have serious budgets and face almost zero competition on Fiverr. You have real hands-on experience with both — a combination that is nearly impossible to find among Fiverr sellers. These gigs are worth publishing even with lower search volume because when a buyer finds them, they have no alternative.</div>
            </Card>
            {BONUS_GIGS.map(g => <GigCard key={g.id} gig={g} accentBorder="#1E6B3C" accentBg="#D9EFE3" />)}
            <AlgoTip>Publish these even if orders are slow initially. One enterprise client for Fortify DevSecOps is worth more than ten Docker fix orders. Tag these gigs with both the tool name and generic terms: "sonarqube, security scanning, devsecops, fortify, sast".</AlgoTip>
          </div>
        )}

        {/* TAB 6 — FAQ & REQS */}
        {active===6 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>Universal FAQ + Gig-Specific Buyer Requirements</div>
            <div style={{ fontSize:12, color:"#595959", marginBottom:12 }}>The per-gig FAQs and Requirements are inside each gig card (Traffic Gigs and High-Ticket Gigs tabs). The universal FAQ below applies to all 10 gigs — add it to every gig in addition to the gig-specific FAQ.</div>
            <div style={{ fontWeight:700, color:"#1F4E79", fontSize:14, marginBottom:8 }}>Universal FAQ — Add to All 10 Gigs</div>
            <FAQ items={[
              { q:"What if you can't fix my issue?", a:"If I genuinely cannot resolve your problem after a thorough attempt, I offer a full refund. This is rare. I will message you before accepting an order if I think it's outside my scope — I'd rather lose an order than deliver something unhelpful." },
              { q:"Do I need to give you server or cloud access?", a:"For debugging gigs: sometimes. I always prefer starting with logs and config files — most issues are diagnosable from those. If I need access, I'll ask for the minimum required (read-only IAM, kubeconfig read access, etc.). Credentials are used only for your project and deleted after delivery." },
              { q:"How quickly can you start after I order?", a:"Within 2 hours of receiving your order requirements. For urgent production issues, message me before ordering and I'll prioritize. I respond to all messages within 1 hour." },
              { q:"What's your full tech stack?", a:"CI/CD: Jenkins, GitHub Actions, GitLab CI, Azure DevOps. Cloud: AWS, Azure. Containers: Docker, Kubernetes (AKS/EKS/on-prem), Helm. IaC: Terraform, Ansible. Security: SonarQube, Fortify SSC/FoD, GitHub Advanced Security, NexusIQ. Monitoring: Prometheus, Grafana, ELK Stack, Dynatrace. Scripting: Python, Bash, PowerShell, Groovy. Message me if your tool isn't listed." },
              { q:"Can you handle regulated or compliance-sensitive environments?", a:"Yes — I worked at Roche (regulated pharma) and PointClickCare (healthcare SaaS) where compliance is non-negotiable. IAM policies, audit logging, encryption, and secure CI/CD patterns are second nature." },
              { q:"What happens if the same issue comes back after delivery?", a:"Message me within the post-delivery support window. If it's the same root cause, I fix it at no charge. If it's a new issue, we discuss the scope together — I won't abandon you." },
              { q:"Can I talk to you before ordering?", a:"Yes — message me first. I'd rather spend 5 minutes understanding your situation than have you order the wrong package. I respond within 1 hour." },
            ]} />
          </div>
        )}

        {/* TAB 7 — THUMBNAILS */}
        {active===7 && <ThumbTab selGig={selGig} setSelGig={setSelGig} />}

        {/* TAB 8 — 7-DAY PLAN */}
        {active===8 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>7-Day Launch Plan — Get Your First Orders Fast</div>
            <Card bg="#E8F4FD">
              <div style={{ fontSize:12 }}>The new seller window starts the moment you publish your first gig. Every action in days 1–7 either compounds your momentum or wastes it. Follow this plan exactly.</div>
            </Card>
            {SEVENDAY.map((d,i)=>(
              <div key={i} style={{ border:"1px solid #C8DFF0", borderLeft:"4px solid #2E75B6", borderRadius:6, marginBottom:12, overflow:"hidden" }}>
                <div style={{ background:d.bg, padding:"10px 16px", fontWeight:700, color:d.color, fontSize:13 }}>{d.day}</div>
                <div style={{ padding:"12px 16px" }}>
                  {d.items.map((item,j)=>(
                    <div key={j} style={{ fontSize:12, marginBottom:6, display:"flex", gap:8 }}>
                      <span style={{ color:"#2E75B6", fontWeight:700, minWidth:16 }}>▸</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <Card title="⚡ Days 1–7 Non-Negotiables" bg="#D9EFE3" border="#1E6B3C" titleColor="#1E6B3C">
              <div style={{ fontSize:12, lineHeight:2 }}>
                ✅ Reply to EVERY message within 1 hour — no exceptions<br/>
                ✅ Never cancel an order — clarify scope BEFORE buyer orders<br/>
                ✅ Start every order within 2 hours of receiving requirements<br/>
                ✅ Deliver early whenever possible — early delivery gets mentioned in reviews<br/>
                ✅ Request review 24h after delivery — don't wait
              </div>
            </Card>
          </div>
        )}

        {/* TAB 9 — 30-DAY PLAN */}
        {active===9 && (
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#1F4E79", marginBottom:4 }}>30-Day Growth Plan</div>
            <Card bg="#E8F4FD">
              <div style={{ fontSize:12 }}><strong>The new seller window:</strong> Fiverr gives every new seller a 30-day boost. Perform well (fast replies, zero cancellations, early reviews) and the algorithm keeps promoting you. Go quiet or cancel and it buries you — recovery takes months.</div>
            </Card>
            <div style={{ marginTop:16 }}>
              {WEEKS.map((w,i)=>(
                <div key={i} style={{ border:"1px solid #C8DFF0", borderLeft:"4px solid #2E75B6", borderRadius:6, marginBottom:14, overflow:"hidden" }}>
                  <div style={{ background:w.bg, padding:"10px 16px", fontWeight:700, color:"#1F4E79", fontSize:13 }}>{w.label}</div>
                  <div style={{ padding:"12px 16px" }}>
                    <div style={{ fontWeight:700, color:"#2E75B6", fontSize:12, marginBottom:6 }}>DAILY:</div>
                    {w.daily.map((d,j)=><div key={j} style={{ fontSize:12, marginBottom:4, display:"flex", gap:6 }}><span style={{color:"#2E75B6"}}>▸</span>{d}</div>)}
                    <div style={{ fontWeight:700, color:"#2E75B6", fontSize:12, margin:"10px 0 6px" }}>THIS WEEK:</div>
                    {w.weekly.map((d,j)=><div key={j} style={{ fontSize:12, marginBottom:4, display:"flex", gap:6 }}><span style={{color:"#595959"}}>•</span>{d}</div>)}
                    <div style={{ background:"#D9EFE3", border:"1px solid #1E6B3C", borderRadius:4, padding:"7px 10px", marginTop:10, fontSize:12, fontWeight:700, color:"#1E6B3C" }}>📊 {w.metric}</div>
                  </div>
                </div>
              ))}
            </div>
            <Card title="The Complete Formula" bg="#D9EFE3" border="#1E6B3C" titleColor="#1E6B3C">
              <div style={{ fontSize:12, lineHeight:2.1 }}>
                <strong>Profile 100% complete</strong> + <strong>10 gigs published day 1</strong> + <strong>10 buyer requests/day</strong> + <strong>Reply in &lt;1 hour</strong> + <strong>Zero cancellations</strong> + <strong>Over-deliver every order</strong> + <strong>Review request 24h after delivery</strong><br/>
                = <strong style={{ color:"#1E6B3C", fontSize:13 }}>First order in 3–5 days · 10 reviews in 30 days · Market pricing in 60 days · Organic traffic daily</strong>
              </div>
            </Card>
            <div style={{ textAlign:"center", padding:"20px 0 10px", color:"#1F4E79", fontWeight:700, fontStyle:"italic", fontSize:14 }}>
              Your depth is your edge. Show it on every single order.<br/>
              <span style={{ fontWeight:400, fontSize:12, color:"#595959" }}>7 years · 3 enterprise companies · 7 AI tools · Full stack from Docker to Dynatrace to Fortify.</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
