[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesSummaryLiveRequestInfo

# Interface: IBacklinksTimeseriesSummaryLiveRequestInfo

Defined in: main.ts:159557

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:159572

starting date of the time range
optional field
this field indicates the date which will be used as a threshold for summary data;
minimum value: 2019-01-30
maximum value shouldn’t exceed the date specified in the date_to
date format: "yyyy-mm-dd"
example:
"2021-01-01"

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:159581

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
minimum value shouldn’t preceed the date specified in the date_from
maximum value: today’s date
date format: "yyyy-mm-dd"
example:
"2021-01-15"

***

### group\_range?

> `optional` **group\_range**: `string`

Defined in: main.ts:159594

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month, year
note: for day, we will return items corresponding to all dates between and including date_from and date_to;
for week/month/year, we will return items corresponding to full weeks/months/years, where each item will indicate the last day of the week/month/year
for example, if you specify:
"group_range": "month",
"date_from": "2022-03-23",
"date_to": "2022-05-13"
we will return items falling between 2022-03-01 and 2022-05-31, namely, three items corresponding to the following dates: 2022-03-31, 2022-04-30, 2022-05-31
if there is no data for a certain  day/week/month/year, we will return 0

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:159599

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:159605

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:159563

domain to get data for
required field
a domain should be specified without https:// and www.
example:
"forbes.com"
