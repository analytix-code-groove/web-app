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
      .select('slug, title')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (data && data.length > 0) {
      const posts = data.map(p => `- [${p.title}](https://www.analytixcg.com/blog/${p.slug})`).join('\n')
      blogSection = `\n## Blog\n\n${posts}\n`
    }
  } catch {
    // Blog section is optional
  }

  const content = `# Analytix Code Groove

> Where data meets flow. We build reliable data platforms, AI workflows, and production-grade apps.

## About

Analytix Code Groove is a technology consultancy specializing in data engineering, cloud infrastructure, and AI-powered solutions. Founded in 2025, we partner with businesses to build scalable, production-grade systems.

## Services

- [Data & Analytics](https://www.analytixcg.com/services/data-analytics): Modern data stacks, warehouses, ETL/ELT pipelines, and real-time dashboards.
- [Generative AI](https://www.analytixcg.com/services/ai): LLM agents, workflow automation, document summarization, and secure code generation.
- [Cloud & DevOps](https://www.analytixcg.com/services/devops): Automated cloud infrastructure, CI/CD pipelines, IaC, and security.
- [Apps & APIs](https://www.analytixcg.com/services/apps): Scalable web/mobile applications with clean, documented APIs.
- [Automation & QA](https://www.analytixcg.com/services/automation-qa): Workflow automation, test automation, and quality gates.
- [IT Consulting](https://www.analytixcg.com/services/consulting): Strategic guidance, architecture blueprints, and technology roadmaps.
- [Staff Augmentation](https://www.analytixcg.com/services/staff-augmentation): Embedded senior engineers integrated into your team.
${blogSection}
## Industries

Healthcare, Energy, Agriculture, Financial Services, Retail.

## Contact

- Website: https://www.analytixcg.com
- Email: hello@analytixcg.com
- LinkedIn: https://www.linkedin.com/company/analytixcg
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
