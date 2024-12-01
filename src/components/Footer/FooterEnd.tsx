export default function FooterEnd() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between pt-8 border-t border-muted-foreground mt-10">
      <p>© {year} Holidaze. All rights reserved.</p>
    </div>
  );
}
