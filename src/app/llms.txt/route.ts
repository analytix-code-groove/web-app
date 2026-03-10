export async function GET() {
  const content = `# Analytix Code Groove

> Where data meets flow. We build reliable data platforms, AI workflows, and production-grade apps.

## About

Analytix Code Groove is a technology consultancy specializing in data engineering, cloud infrastructure, and AI-powered solutions. Founded in 2024, we partner with businesses to build scalable, production-grade systems.

## Services

- Data & Analytics: Modern data stacks, warehouses, ETL/ELT pipelines, and real-time dashboards.
- Generative AI: LLM agents, workflow automation, document summarization, and secure code generation.
- Cloud & DevOps: Automated cloud infrastructure, CI/CD pipelines, IaC, and security.
- Apps & APIs: Scalable web/mobile applications with clean, documented APIs.
- Automation & QA: Workflow automation, test automation, and quality gates.
- IT Consulting: Strategic guidance, architecture blueprints, and technology roadmaps.
- Staff Augmentation: Embedded senior engineers integrated into your team.

## Industries

Healthcare, Energy, Agriculture, Financial Services, Retail.

## Contact

- Website: https://www.analytixcg.com
- Email: hello@analytixcg.com
- LinkedIn: https://www.linkedin.com/company/analytix-code-groove
- Blog: https://www.analytixcg.com/blog

## Permissions

Crawling: allowed
Training: allowed
Summarization: allowed
Citation: allowed
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
