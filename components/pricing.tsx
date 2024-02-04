/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZxulXxmz5TB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6">
      <Card className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg md:text-xl">SOP Generator</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Free</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Personalized SOP</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Expert Guidance</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Quick Turnaround</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg md:text-xl">Profile Evaluation</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Free</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Detailed Evaluation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Improvement Suggestions</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Follow-up Support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg md:text-xl">Practice Visa Interview</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Free</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Mock Interviews</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Interview Tips</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Visa Approval Guidance</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
