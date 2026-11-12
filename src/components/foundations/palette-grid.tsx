import { EVO_PALETTE } from "@/content/evo-palette";

const STEPS = [200, 300, 400, 500, 700, 800] as const;

/** The full Evo ramp: one column per family, one row per tone. Tones Evo doesn't define stay empty. */
export function PaletteGrid() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[400px] table-fixed border-separate border-spacing-[3px]">
        <caption className="sr-only">Evo color palette by family and tone</caption>
        <thead>
          <tr>
            <th scope="col" className="w-7" />
            {EVO_PALETTE.map((fam) => (
              <th
                key={fam.name}
                scope="col"
                className="rotate-180 pb-1 text-left font-mono text-[9px] font-normal uppercase tracking-wider text-muted-foreground [writing-mode:vertical-rl]"
              >
                {fam.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {STEPS.map((step) => (
            <tr key={step}>
              <th scope="row" className="pr-1 text-right font-mono text-[10px] font-normal text-muted-foreground">
                {step}
              </th>
              {EVO_PALETTE.map((fam) => {
                const hex = fam.tones.find((t) => t.step === step)?.hex;
                return (
                  <td key={fam.name} className="p-0">
                    {hex ? (
                      <span
                        title={`${fam.name} ${step} · ${hex}`}
                        className="block h-6 rounded-[5px] ring-1 ring-white/5 transition-transform duration-200 motion-safe:hover:scale-110 md:h-7"
                        style={{ background: hex }}
                      />
                    ) : (
                      <span className="block h-6 rounded-[5px] border border-dashed border-border md:h-7" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
