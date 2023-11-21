import { NextRequest, NextResponse } from "next/server"
 
export function GET(req: NextRequest) {
  const list = Array.from({length: 10}, (_,index) => ({
      id: index + 1,
      title: `title${index + 1}`,
      state: 'TASK_ARCHIVED'
  }))
  return NextResponse.json(list, { status: 200 })
}
