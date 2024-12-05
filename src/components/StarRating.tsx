import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 md:w-4 md:h-4 ${
            i < rating 
              ? 'text-yellow-400 fill-yellow-400' 
              : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  )
}