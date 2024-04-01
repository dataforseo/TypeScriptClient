[Documentation](../README.md) / [Exports](../modules.md) / IPaidDataforseoLabsSerpElementItem

# Interface: IPaidDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IPaidDataforseoLabsSerpElementItem`**

## Implemented by

- [`PaidDataforseoLabsSerpElementItem`](../classes/PaidDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_info](IPaidDataforseoLabsSerpElementItem.md#backlinks_info)
- [breadcrumb](IPaidDataforseoLabsSerpElementItem.md#breadcrumb)
- [description](IPaidDataforseoLabsSerpElementItem.md#description)
- [description\_rows](IPaidDataforseoLabsSerpElementItem.md#description_rows)
- [domain](IPaidDataforseoLabsSerpElementItem.md#domain)
- [estimated\_paid\_traffic\_cost](IPaidDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)
- [etv](IPaidDataforseoLabsSerpElementItem.md#etv)
- [extra](IPaidDataforseoLabsSerpElementItem.md#extra)
- [highlighted](IPaidDataforseoLabsSerpElementItem.md#highlighted)
- [impressions\_etv](IPaidDataforseoLabsSerpElementItem.md#impressions_etv)
- [links](IPaidDataforseoLabsSerpElementItem.md#links)
- [main\_domain](IPaidDataforseoLabsSerpElementItem.md#main_domain)
- [position](IPaidDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IPaidDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_changes](IPaidDataforseoLabsSerpElementItem.md#rank_changes)
- [rank\_group](IPaidDataforseoLabsSerpElementItem.md#rank_group)
- [rank\_info](IPaidDataforseoLabsSerpElementItem.md#rank_info)
- [relative\_url](IPaidDataforseoLabsSerpElementItem.md#relative_url)
- [se\_type](IPaidDataforseoLabsSerpElementItem.md#se_type)
- [title](IPaidDataforseoLabsSerpElementItem.md#title)
- [url](IPaidDataforseoLabsSerpElementItem.md#url)
- [xpath](IPaidDataforseoLabsSerpElementItem.md#xpath)

## Properties

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Defined in

main.ts:96623

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Defined in

main.ts:96585

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:96583

___

### description\_rows

• `Optional` **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Defined in

main.ts:96594

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:96581

___

### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:96615

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:96605

___

### extra

• `Optional` **extra**: `Object`

additional information about the result

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

main.ts:96591

___

### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:96589

___

### impressions\_etv

• `Optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:96610

___

### links

• `Optional` **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

link of the element

#### Defined in

main.ts:96596

___

### main\_domain

• `Optional` **main\_domain**: `string`

primary domain name in SERP

#### Defined in

main.ts:96598

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:96575

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:96571

___

### rank\_changes

• `Optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Defined in

main.ts:96619

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:96568

___

### rank\_info

• `Optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Defined in

main.ts:96625

___

### relative\_url

• `Optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Defined in

main.ts:96600

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:96621

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:96579

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:96587

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:96577
