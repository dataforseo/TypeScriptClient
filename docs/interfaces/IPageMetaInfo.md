[**Documentation**](../README.md)

***

[Documentation](../README.md) / IPageMetaInfo

# Interface: IPageMetaInfo

Defined in: main.ts:166516

## Indexable

\[`key`: `string`\]: `any`

## Properties

### broken\_html?

> `optional` **broken\_html**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

Defined in: main.ts:166583

resource errors and warnings

***

### canonical?

> `optional` **canonical**: `string`

Defined in: main.ts:166536

canonical page

***

### charset?

> `optional` **charset**: `number`

Defined in: main.ts:166521

code page
example: 65001

***

### content?

> `optional` **content**: [`HtmlContentInfo`](../classes/HtmlContentInfo.md)

Defined in: main.ts:166570

overall information about content of the page

***

### cumulative\_layout\_shift?

> `optional` **cumulative\_layout\_shift**: `number`

Defined in: main.ts:166565

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

***

### deprecated\_tags?

> `optional` **deprecated\_tags**: `string`[]

Defined in: main.ts:166572

deprecated tags on the page

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:166530

content of the meta description tag

***

### description\_length?

> `optional` **description\_length**: `number`

Defined in: main.ts:166558

length of the description tag in characters

***

### duplicate\_meta\_tags?

> `optional` **duplicate\_meta\_tags**: `string`[]

Defined in: main.ts:166574

duplicate meta tags on the page

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

Defined in: main.ts:166540

number of external links on the page

***

### favicon?

> `optional` **favicon**: `string`

Defined in: main.ts:166532

favicon of the page

***

### follow?

> `optional` **follow**: `boolean`

Defined in: main.ts:166524

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

***

### generator?

> `optional` **generator**: `string`

Defined in: main.ts:166526

meta tag generator

***

### htags?

> `optional` **htags**: `object`

Defined in: main.ts:166528

HTML header tags

#### Index Signature

\[`key`: `string`\]: `string`[]

***

### images\_count?

> `optional` **images\_count**: `number`

Defined in: main.ts:166544

number of images on the page

***

### images\_size?

> `optional` **images\_size**: `number`

Defined in: main.ts:166546

total size of images on the page measured in bytes

***

### inbound\_links\_count?

> `optional` **inbound\_links\_count**: `number`

Defined in: main.ts:166542

number of internal links pointing at the page

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

Defined in: main.ts:166538

number of internal links on the page

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`

Defined in: main.ts:166534

content of the keywords meta tag

***

### meta\_title?

> `optional` **meta\_title**: `string`

Defined in: main.ts:166568

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

***

### render\_blocking\_scripts\_count?

> `optional` **render\_blocking\_scripts\_count**: `number`

Defined in: main.ts:166560

number of scripts on the page that block page rendering

***

### render\_blocking\_stylesheets\_count?

> `optional` **render\_blocking\_stylesheets\_count**: `number`

Defined in: main.ts:166562

number of CSS styles on the page that block page rendering

***

### scripts\_count?

> `optional` **scripts\_count**: `number`

Defined in: main.ts:166548

number of scripts on the page

***

### scripts\_size?

> `optional` **scripts\_size**: `number`

Defined in: main.ts:166550

total size of scripts on the page measured in bytes

***

### social\_media\_tags?

> `optional` **social\_media\_tags**: `object`

Defined in: main.ts:166581

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index Signature

\[`key`: `string`\]: `string`

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:166577

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### stylesheets\_count?

> `optional` **stylesheets\_count**: `number`

Defined in: main.ts:166552

number of stylesheets on the page

***

### stylesheets\_size?

> `optional` **stylesheets\_size**: `number`

Defined in: main.ts:166554

total size of stylesheets on the page measured in bytes

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:166518

page title

***

### title\_length?

> `optional` **title\_length**: `number`

Defined in: main.ts:166556

length of the title tag in characters
