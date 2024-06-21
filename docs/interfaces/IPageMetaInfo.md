**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPageMetaInfo

# Interface: IPageMetaInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### broken\_html?

> **`optional`** **broken\_html**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Source

main.ts:152882

***

### canonical?

> **`optional`** **canonical**: `string`

canonical page

#### Source

main.ts:152835

***

### charset?

> **`optional`** **charset**: `number`

code page
example: 65001

#### Source

main.ts:152820

***

### content?

> **`optional`** **content**: [`HtmlContentInfo`](../classes/HtmlContentInfo.md)

overall information about content of the page

#### Source

main.ts:152869

***

### cumulative\_layout\_shift?

> **`optional`** **cumulative\_layout\_shift**: `number`

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

#### Source

main.ts:152864

***

### deprecated\_tags?

> **`optional`** **deprecated\_tags**: `string`[]

deprecated tags on the page

#### Source

main.ts:152871

***

### description?

> **`optional`** **description**: `string`

content of the meta description tag

#### Source

main.ts:152829

***

### description\_length?

> **`optional`** **description\_length**: `number`

length of the description tag in characters

#### Source

main.ts:152857

***

### duplicate\_meta\_tags?

> **`optional`** **duplicate\_meta\_tags**: `string`[]

duplicate meta tags on the page

#### Source

main.ts:152873

***

### external\_links\_count?

> **`optional`** **external\_links\_count**: `number`

number of external links on the page

#### Source

main.ts:152839

***

### favicon?

> **`optional`** **favicon**: `string`

favicon of the page

#### Source

main.ts:152831

***

### follow?

> **`optional`** **follow**: `boolean`

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

#### Source

main.ts:152823

***

### generator?

> **`optional`** **generator**: `string`

meta tag generator

#### Source

main.ts:152825

***

### htags?

> **`optional`** **htags**: `Object`

HTML header tags

#### Index signature

 \[`key`: `string`\]: `string`[]

#### Source

main.ts:152827

***

### images\_count?

> **`optional`** **images\_count**: `number`

number of images on the page

#### Source

main.ts:152843

***

### images\_size?

> **`optional`** **images\_size**: `number`

total size of images on the page measured in bytes

#### Source

main.ts:152845

***

### inbound\_links\_count?

> **`optional`** **inbound\_links\_count**: `number`

number of internal links pointing at the page

#### Source

main.ts:152841

***

### internal\_links\_count?

> **`optional`** **internal\_links\_count**: `number`

number of internal links on the page

#### Source

main.ts:152837

***

### meta\_keywords?

> **`optional`** **meta\_keywords**: `string`

content of the keywords meta tag

#### Source

main.ts:152833

***

### meta\_title?

> **`optional`** **meta\_title**: `string`

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

#### Source

main.ts:152867

***

### render\_blocking\_scripts\_count?

> **`optional`** **render\_blocking\_scripts\_count**: `number`

number of scripts on the page that block page rendering

#### Source

main.ts:152859

***

### render\_blocking\_stylesheets\_count?

> **`optional`** **render\_blocking\_stylesheets\_count**: `number`

number of CSS styles on the page that block page rendering

#### Source

main.ts:152861

***

### scripts\_count?

> **`optional`** **scripts\_count**: `number`

number of scripts on the page

#### Source

main.ts:152847

***

### scripts\_size?

> **`optional`** **scripts\_size**: `number`

total size of scripts on the page measured in bytes

#### Source

main.ts:152849

***

### social\_media\_tags?

> **`optional`** **social\_media\_tags**: `Object`

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:152880

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Source

main.ts:152876

***

### stylesheets\_count?

> **`optional`** **stylesheets\_count**: `number`

number of stylesheets on the page

#### Source

main.ts:152851

***

### stylesheets\_size?

> **`optional`** **stylesheets\_size**: `number`

total size of stylesheets on the page measured in bytes

#### Source

main.ts:152853

***

### title?

> **`optional`** **title**: `string`

page title

#### Source

main.ts:152817

***

### title\_length?

> **`optional`** **title\_length**: `number`

length of the title tag in characters

#### Source

main.ts:152855
