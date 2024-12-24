import { pinata } from '@/utils/config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File = data.get('file') as unknown as File
    const uploadData = await pinata.upload.file(file)
    const url = await pinata.gateways.createSignedURL({
      cid: uploadData.cid,
      expires: 1000 * 60 * 60 * 24 * 30 * 12 * 10,
    })
    return NextResponse.json(url, { status: 200 })
  } catch (e) {
    return NextResponse.json(e, { status: 500 })
  }
}
