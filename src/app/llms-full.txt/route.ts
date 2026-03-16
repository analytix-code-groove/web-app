import { createSupabaseServerClient } from '@/lib/supabase'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  let blogSection = ''
  try {
    const supabase = createSupabaseServerClient()
    const { data } = await supabase
      .schema('content')
      .from('posts')
      .select('slug, title, excerpt, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (data && data.length > 0) {
      const posts = data
        .map(p => {
          const date = p.published_at ? new Date(p.published_at).toISOString().split('T')[0] : ''
          const excerpt = p.excerpt ? ` — ${p.excerpt}` : ''
          return `- [${p.title}](https://www.analytixcg.com/blog/${p.slug}) (${date})${excerpt}`
        })
        .join('\n')
      blogSection = `\n## Blog\n\n${posts}\n`
    }
  } catch {
    // Blog section is optional
  }

  const content = `# Analytix Code Groove — Full Reference

> Where data meets flow. We build reliable data platforms, AI workflows, and production-grade apps.

## About

Analytix Code Groove is a technology consultancy specializing in data engineering, cloud infrastructure, and AI-powered solutions. Founded in 2025 by Rodrigo Labarile, we partner with businesses to build scalable, production-grade systems.

We serve industries including Healthcare, Energy, Agriculture, Financial Services, and Retail, delivering end-to-end solutions from strategy through implementation.

## Leadership

- **Rodrigo Labarile** — Founder & CEO. Software engineer with expertise in data platforms, cloud architecture, and AI systems.

## Services (Detailed)

### Data & Analytics
URL: https://www.analytixcg.com/services/data-analytics
Modern data stacks, warehouses, ETL/ELT pipelines, and real-time dashboards. We design and build data warehouses and data lakes, integration pipelines (batch and streaming), data quality and reliability frameworks, interactive dashboards and BI layers, and advanced visualization and analytics.

### Generative AI
URL: https://www.analytixcg.com/services/ai
LLM agents, workflow automation, document summarization, and secure code generation. We build production-grade LLM applications, event-driven AI workflows, and monitoring and observability for AI systems.

### Cloud & DevOps
URL: https://www.analytixcg.com/services/devops
Automated cloud infrastructure, CI/CD pipelines, IaC, and security. We provide infrastructure as code, continuous integration and delivery pipelines, and DevSecOps practices for secure, scalable cloud environments.

### Apps & APIs
URL: https://www.analytixcg.com/services/apps
Scalable web/mobile applications with clean, documented APIs. We build modern frontends, robust backend APIs, and handle operational concerns like monitoring, scaling, and reliability.

### Automation & QA
URL: https://www.analytixcg.com/services/automation-qa
Workflow automation, test automation, and quality gates. We automate business processes, build test automation frameworks, and implement quality checkpoints across the development lifecycle.

### IT Consulting
URL: https://www.analytixcg.com/services/consulting
Strategic guidance, architecture blueprints, and technology roadmaps. We help organizations align technology decisions with business goals through strategy sessions, architecture reviews, and actionable roadmaps.

### Staff Augmentation
URL: https://www.analytixcg.com/services/staff-augmentation
Embedded senior engineers integrated into your team. We provide vetted, experienced engineers who ramp up quickly and integrate seamlessly with your existing workflows and culture.
${blogSection}
## Technology Stack

- **Frontend:** Next.js, React, TypeScript, TailwindCSS
- **Backend:** Node.js, Python, PostgreSQL, Supabase
- **Cloud:** AWS, GCP, Terraform, Docker, Kubernetes
- **Data:** Snowflake, dbt, Airflow, Spark, Kafka
- **AI/ML:** OpenAI, Anthropic Claude, LangChain, vector databases

## Contact

- Website: https://www.analytixcg.com
- Email: hello@analytixcg.com
- LinkedIn: https://www.linkedin.com/company/analytixcg
- X/Twitter: https://x.com/analytixcg
- GitHub: https://github.com/analytix-code-groove
- Clutch: https://clutch.co/profile/analytix-code-groove
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
