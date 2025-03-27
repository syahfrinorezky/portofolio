// app/(home)/page.tsx
export default async function Resume() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to My Website</h1>
      <p>This content will appear immediately</p>
    </div>
  )
}