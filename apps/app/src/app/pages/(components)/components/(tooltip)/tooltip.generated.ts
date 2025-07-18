// eslint-disable -- auto-generated
// prettier-ignore -- auto-generated
/*
DO NOT EDIT THIS FILE!!
It is automatically generated by the extract-primitive-code generator.
Instead, edit the `(tooltip).preview.ts` file or the generator itself.
Run `pnpm run generate-snippets` to update this file.
*/

export const tooltipSimpleCode = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmTooltipTriggerDirective } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'spartan-tooltip-simple',
	imports: [HlmTooltipTriggerDirective, HlmButtonDirective],
	template: \`
		<button [hlmTooltipTrigger]="'Simple tooltip'" aria-describedby="Simple tooltip" hlmBtn variant="outline">
			Simple
		</button>
	\`,
})
export class TooltipSimpleComponent {}
`;

export const defaultCode = `
import { Component } from '@angular/core';
import { BrnTooltipContentDirective } from '@spartan-ng/brain/tooltip';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'spartan-tooltip-preview',
	imports: [HlmTooltipComponent, HlmTooltipTriggerDirective, BrnTooltipContentDirective, HlmButtonDirective],
	template: \`
		<div>
			<hlm-tooltip>
				<button hlmTooltipTrigger aria-describedby="Hello world" hlmBtn variant="outline">Default</button>
				<span *brnTooltipContent class="flex items-center">
					Add to library

					<span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
						<svg
							class="bg-primary fill-primary z-50 block size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
							width="10"
							height="5"
							viewBox="0 0 30 10"
							preserveAspectRatio="none"
						>
							<polygon points="0,0 30,0 15,10"></polygon>
						</svg>
					</span>
				</span>
			</hlm-tooltip>
		</div>
	\`,
})
export class TooltipPreviewComponent {}
`;
