**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAnalysisContentInfo

# Interface: IAnalysisContentInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### author?

> **`optional`** **author**: `string`

author of the content

#### Source

main.ts:165796

***

### connotation\_types?

> **`optional`** **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:165816

***

### content\_quality\_score?

> **`optional`** **content\_quality\_score**: `number`

content quality score
this value is calculated based on the number of words, sentences and characters the content contains

#### Source

main.ts:165827

***

### content\_type?

> **`optional`** **content\_type**: `string`

type of content
example:
page_content, comment

#### Source

main.ts:165785

***

### date\_published?

> **`optional`** **date\_published**: `string`

date and time when the content was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:165824

***

### group\_date?

> **`optional`** **group\_date**: `string`

citation group date and time
indicates content publication date or date and time when our crawler visited the page for the first time;
this field can be used to group citations by date and display citation trends;
date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:165842

***

### highlighted\_text?

> **`optional`** **highlighted\_text**: `string`

highlighted text from the snippet

#### Source

main.ts:165805

***

### language?

> **`optional`** **language**: `string`

content language
to obtain a full list of available languages, refer to the Languages endpoint

#### Source

main.ts:165808

***

### level?

> **`optional`** **level**: `number`

title heading level
indicates h-tag level from 1 (top) to 6 (bottom)

#### Source

main.ts:165794

***

### main\_title?

> **`optional`** **main\_title**: `string`

page title

#### Source

main.ts:165789

***

### previous\_title?

> **`optional`** **previous\_title**: `string`

title of the previous content block

#### Source

main.ts:165791

***

### rating?

> **`optional`** **rating**: [`ContentAnalysisRatingInfo`](../classes/ContentAnalysisRatingInfo.md)

content rating
rating related to content_info

#### Source

main.ts:165835

***

### semantic\_location?

> **`optional`** **semantic\_location**: `string`

semantic location
indicates semantic element in HTML where the target keyword citation is located
example:
article, header

#### Source

main.ts:165832

***

### sentiment\_connotations?

> **`optional`** **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:165812

***

### snippet?

> **`optional`** **snippet**: `string`

content snippet

#### Source

main.ts:165798

***

### snippet\_length?

> **`optional`** **snippet\_length**: `number`

character length of the snippet

#### Source

main.ts:165800

***

### social\_metrics?

> **`optional`** **social\_metrics**: [`SocialMetricsInfo`](../classes/SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Source

main.ts:165803

***

### text\_category?

> **`optional`** **text\_category**: `number`[]

text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Source

main.ts:165819

***

### title?

> **`optional`** **title**: `string`

title of the result

#### Source

main.ts:165787
