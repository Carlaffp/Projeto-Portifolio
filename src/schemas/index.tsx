import  {z} from "zod";
export const RepoSchema = z.object({
  
  name: z.string(),
  description: z.string(),
  html_url: z.string().url(),
  language:z.array(z.string()),
  link: z.string().url(),
})

export type RepoData = z.infer<typeof RepoSchema>