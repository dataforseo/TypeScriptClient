[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

# Interface: IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_distribution?

> `optional` **country\_distribution**: [`CountryDistribution`](../classes/CountryDistribution.md)[]

distribution of clickstream by countries
represents clickstream-based search volume in available countries, as well as its respective percentage of global search volume

#### Defined in

main.ts:136227

***

### keyword?

> `optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:136220

***

### search\_volume?

> `optional` **search\_volume**: `number`

clickstream-based average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea based on clickstream
you can learn more about clickstream search volume in this Help Center article

#### Defined in

main.ts:136224
