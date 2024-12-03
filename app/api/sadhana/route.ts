import { NextResponse } from 'next/server';
import dbConnect from '../../../utils/dbConnect';
import SadhanaModel from '../../../models/Sadhana';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    const sadhana = await SadhanaModel.create(data);
    return NextResponse.json({ success: true, data: sadhana });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to save data' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const sadhanas = await SadhanaModel.find({});
    return NextResponse.json({ success: true, data: sadhanas });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to fetch data' }, { status: 500 });
  }
}
