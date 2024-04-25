import { z } from 'zod'

export const DataChats = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    avatar: z.string().nullable(),
    lastMessage: z.string(),
    lastMessageDate: z.string(),
    unreadMessages: z.number(),
    isFixed: z.boolean(),
    isGroup: z.boolean(),
    groupMembers: z
      .array(z.object({ id: z.string(), name: z.string(), isOnline: z.boolean() }))
      .nullish()
  })
)

export const schemaChat = z.object({
  id: z.string(),
  name: z.string(),
  avatar: z.string().nullable(),
  lastMessage: z.string(),
  lastMessageDate: z.string(),
  unreadMessages: z.number(),
  isFixed: z.boolean(),
  isGroup: z.boolean(),
  groupMembers: z.array(
    z.object({ id: z.string(), name: z.string(), isOnline: z.boolean() }).nullish()
  )
})

export type Card = z.infer<typeof schemaChat>
