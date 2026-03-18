import personal from "../details/personal";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-400">
      © {new Date().getFullYear()} {personal.name}. Built with React and Tailwind CSS.
    </footer>
  );
}