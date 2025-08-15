export type Post = {
  slug: string
  title: string
  excerpt: string
}

export const posts: ReadonlyArray<Post> = [
  { slug: 'databricks-pipeline-slos', title: 'SLOs for Data Pipelines', excerpt: 'Designing reliability you can measure.' },
  { slug: 'aws-step-functions-observability', title: 'Observability for Step Functions', excerpt: 'Metrics that matter.' },
]
