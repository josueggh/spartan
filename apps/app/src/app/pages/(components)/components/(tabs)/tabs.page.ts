import type { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { HlmAlertDescriptionDirective, HlmAlertDirective } from '@spartan-ng/helm/alert';
import { hlmCode, hlmH4 } from '@spartan-ng/helm/typography';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { CodePreviewDirective } from '../../../../shared/code/code-preview.directive';
import { CodeComponent } from '../../../../shared/code/code.component';
import { MainSectionDirective } from '../../../../shared/layout/main-section.directive';
import { PageBottomNavLinkComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav.component';
import { PageNavComponent } from '../../../../shared/layout/page-nav/page-nav.component';
import { SectionIntroComponent } from '../../../../shared/layout/section-intro.component';
import { SectionSubHeadingComponent } from '../../../../shared/layout/section-sub-heading.component';
import { TabsCliComponent } from '../../../../shared/layout/tabs-cli.component';
import { TabsComponent } from '../../../../shared/layout/tabs.component';
import { UIApiDocsComponent } from '../../../../shared/layout/ui-docs-section/ui-docs-section.component';
import { metaWith } from '../../../../shared/meta/meta.util';
import { TabsPaginatedPreviewComponent } from './tabs--paginated.preview';
import { TabsVerticalPreviewComponent } from './tabs--vertical.preview';
import { defaultCode, tabsPaginatedCode, tabsVerticalCode } from './tabs.generated';
import { TabsPreviewComponent, defaultImports, defaultSkeleton } from './tabs.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Tabs', api: 'tabs' },
	meta: metaWith(
		'spartan/ui - Tabs',
		'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
	),
	title: 'spartan/ui - Tabs',
};
@Component({
	selector: 'spartan-tabs-page',
	imports: [
		UIApiDocsComponent,
		MainSectionDirective,
		CodeComponent,
		SectionIntroComponent,
		SectionSubHeadingComponent,
		TabsComponent,
		TabsCliComponent,
		CodePreviewDirective,
		PageNavComponent,
		PageBottomNavComponent,
		PageBottomNavLinkComponent,
		TabsPreviewComponent,
		TabsVerticalPreviewComponent,
		TabsPaginatedPreviewComponent,
		HlmAlertDescriptionDirective,
		HlmAlertDirective,
		NgIcon,
		HlmIconDirective,
	],
	providers: [provideIcons({ lucideCircleAlert })],
	template: `
		<section spartanMainSection>
			<spartan-section-intro
				name="Tabs"
				lead="A set of layered sections of content—known as tab panels—that are displayed one at a time."
			/>

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-tabs-preview />
				</div>
				<spartan-code secondTab [code]="defaultCode" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-cli-tabs class="mt-4" nxCode="npx nx g @spartan-ng/cli:ui tabs" ngCode="ng g @spartan-ng/cli:ui tabs" />

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="defaultImports" />
				<spartan-code [code]="defaultSkeleton" />
			</div>

			<spartan-section-sub-heading id="brn-api">Brain API</spartan-section-sub-heading>
			<spartan-ui-api-docs docType="brain" />

			<spartan-section-sub-heading id="hlm-api">Helm API</spartan-section-sub-heading>
			<spartan-ui-api-docs docType="helm" />

			<spartan-section-sub-heading id="examples">Examples</spartan-section-sub-heading>
			<h3 id="examples__vertical" class="${hlmH4} mb-2 mt-6">Vertical</h3>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-tabs-vertical />
				</div>
				<spartan-code secondTab [code]="verticalCode" />
			</spartan-tabs>

			<h3 id="examples__paginated_tabs" class="${hlmH4} mb-2 mt-6">Paginated Tabs</h3>

			<p class="pt-2">
				Use
				<code class="${hlmCode}">hlm-paginated-tabs-list</code>
				instead of
				<code class="${hlmCode}">hlm-tabs-list</code>
				for paginated tabs list with next and previous buttons.
			</p>
			<p class="py-2">
				Disable pagination with
				<code class="${hlmCode}">[disablePagination]="true"</code>
				. Hides the pagination buttons and active tab is not scrolled into view.
			</p>

			<div hlmAlert class="my-2">
				<ng-icon hlm hlmAlertIcon name="lucideCircleAlert" />
				<div hlmAlertDescription>
					<p>
						<strong>Padding</strong>
						styles, applied to the tab list (
						<code class="${hlmCode}">listVariants</code>
						), are
						<strong>not</strong>
						taken into account during
						<strong>keyboard scrolling</strong>
						. This affects the active tab's scrolling position and next/previous button remain enabled even when the
						active tab is at the start or end of the tab list.
					</p>
				</div>
			</div>

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-tabs-paginated />
				</div>
				<spartan-code secondTab [code]="paginatedCode" />
			</spartan-tabs>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="textarea" label="Textarea" />
				<spartan-page-bottom-nav-link direction="previous" href="table" label="Table" />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav />
	`,
})
export default class TabsPageComponent {
	protected readonly defaultCode = defaultCode;
	protected readonly defaultSkeleton = defaultSkeleton;
	protected readonly defaultImports = defaultImports;

	protected readonly verticalCode = tabsVerticalCode;
	protected readonly paginatedCode = tabsPaginatedCode;
}
