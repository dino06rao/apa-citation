/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/xstxchzmYse
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function score() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">Score Card</CardTitle>
        <GoalIcon className="w-4 h-4 text-orange-500 dark:text-orange-400" />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <div className="text-6xl font-bold text-orange-500">86</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">Your current score</p>
      </CardContent>
      <CardFooter className="pt-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Issues</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Issue 1: Scan your paper for plagiarism mistakes</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Issue 2: Check for 400+ advanced grammar errors</p>
        </div>
        <Button className="mt-4 w-full bg-green-500 text-white">Try the Free Paraphrasing Tool</Button>
      </CardFooter>
    </Card>
  )
}


function GoalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
      <path d="M8 10a5 5 0 1 0 8.9 2.02" />
    </svg>
  )
}