import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ name: "John Doe" });
}

export async function POST() {
    return NextResponse.json({ name: "John Doe" });
}

export async function PUT() {
    return NextResponse.json({ name: "John Doe" });
}

export async function DELETE() {
    return NextResponse.json({ name: "John Doe" });
}