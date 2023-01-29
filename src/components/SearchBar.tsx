import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { cva, type VariantProps } from 'class-variance-authority'

const styles = cva('border px-4 h-12 rounded-lg', {
  variants: {
    width: {
      full: 'w-full',
      default: 'w-[450px]'
    },
    color: {
      inverted: 'bg-transparent border-gray-500 placeholder-gray-300',
      default: '',
    }
  },
  defaultVariants: {
    width: 'default',
    color: 'default',
  }
})

type SearchBarProps = {
  className?: string;
} & VariantProps<typeof styles>;

export const SearchBar: React.FC<SearchBarProps> = ({
  color,
  width,
  className = '',
}) => {
  const router = useRouter();

  const [query, setQuery] = useState(router.query.query as string || '');

  useEffect(() => {
    setQuery(router.query.query as string || '');
  }, [router]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    void router.push(`/search?query=${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles({ color, width, class: className })}
        placeholder='Search for Movies or TV Shows'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  )
}
