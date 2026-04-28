import dbConnect from "@/lib/mongodb";
import Workout from "@/lib/models/Workout";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    await dbConnect();
    const session = await getServerSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();
    const newWorkout = await Workout.create({
      ...data,
      userId: session.user.id
    });

    return NextResponse.json(newWorkout, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const workouts = await Workout.find({ userId }).sort({ date: -1 });
  return NextResponse.json(workouts);
}
