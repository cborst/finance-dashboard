//Temporary storage for constants

//constants are listed in 2 places, this will avoid changing favorites in 2 places
import * as companyList from '../../constants.js';

//The companies we are interested in
export const companies = [
    'ACN',
    'ATVI',
    'ADBE',
    'AMD',
    'AKAM',
    'ADS',
    'GOOGL',
    'GOOG',
    'APH',
    'ADI',
    'ANSS',
    'AAPL',
    'ADSK',
    'ADP',
    'AVGO',
    'CA',
    'CSCO',
    'CTXS',
    'CTSH',
    'GLW',
    'CSRA',
    'DXC',
    'EBAY',
    'EA',
    'FFIV',
    'FB',
    'FIS',
    'FISV',
    'FLIR',
    'IT',
    'GPN',
    'HRS',
    'HPE',
    'HPQ',
    'INTC',
    'IBM',
    'INTU',
    'JNPR',
    'KLAC',
    'LRCX',
    'MA',
    'MCHP',
    'MU',
    'MSFT',
    'MSI',
    'NTAP',
    'NVDA',
    'ORCL',
    'PAYX',
    'PYPL',
    'QRVO',
    'QCOM',
    'RHT',
    'CRM',
    'STX',
    'SWKS',
    'SYMC',
    'SNPS',
    'TEL',
    'TXN',
    'TSS',
    'VRSN',
    'V',
    'WDC',
    'WU',
    'XLNX',
    'XRX'
]

export const indices = [ 
    'XLK',
    'XLF',
    'XLE',
    'XLV'
]

//Added 
export const financeCompanies =[
    // FINANCIAL SECTOR
    'AMG',
    'AFL',
    'ALL',
    'AXP',
    'AXP',
    'AIG',
    'AMP',
    'AON',
    'AJG',
    'AIZ',
    'BAC',
    'BBT',
    'BRK-B',
    'BLK',
    'HRB',
    'COF',
    'CBOE',
    'SCHW',
    'CB',
    'CINF',
    'C',
    'CFG',
    'CME',
    'CMA',
    'DFS',
    'ETFC',
    'FITB',
    'BEN',
    'GS',
    'HIG',
    'HBAN',
    'ICE',
    'IVZ',
    'JPM',
    'KEY',
    'LUK',
    'LNC',
    'L',
    'MTB',
    'MMC',
    'MET',
    'MCO',
    'MS',
    'NDAQ',
    'NAVI',
    'NTRS',
    'PBCT',
    'PNC',
    'PFG',
    'PGR',
    'PRU',
    'RF',
    'SPGI',
    'STT',
    'STI',
    'SYF',
    'TROW',
    'BK',
    'TRV',
    'TMK',
    'USB',
    'UNM',
    'WFC',
    'WLTW',
    'XL',
    'ZION'
    //END FINANCIAL SECTOR
]

export const healthCareCompanies = [
    'ABT', 
    'ABBV',
    'AET',
    'A',
    'ALXN',
    'AGN',
    'ABC',
    'AMGN',
    'ANTM',
    'BCR',
    'BAX',
    'BDX',
    'BIIB',
    'BSX',
    'BMY',
    'CAH',
    'CELG',
    'CNC',
    'CERN',
    'CI',
    'DHR',
    'XRAY',
    'EW',
    'EVHC',
    'ESRX',
    'GILD',
    'HCA',
    'HSIC',
    'HOLX',
    'HUM',
    'IDXX',
    'ILMN',
    'INCY',
    'ISRG',
    'JNJ',
    'LH',
    'LLY',
    'MNK',
    'MCK',
    'MDT',
    'MRK',
    'MTD',
    'MYL',
    'PDCO',
    'PKI',
    'PRGO',
    'PFE',
    'DGX',
    'REGN',
    'SYK',
    'COO',
    'TMO',
    'UNH',
    'UHS',
    'VAR',
    'VRTX',
    'WAT',
    'ZBH',
    'ZTS'

]

export const consumerDiscretionary = [
    'AAP',
    //'MO', Actually Staples
    'AMZN',
    //'ADM', Staples
    'AN',
    'AZO',
    'BBBY',
    'BBY',
    'BWA',
    'BF.B',  //CHECK TO SEE IF THIS IS A .  OR  -
    //'CPB', Staples
    'KMX',
    'CCL',
    'CBS',
    'CHTR',
    'CMG',
    //'CHD', Staples
    'COH',
    //'KO', Staples
    //'CL',
    'CMCSA',
    //'CAG',
    //'STZ',
    //'COST',
    //'COTY',
    //'CVS',
    'DHI',
    'DRI',
    'DLPH',
    'DISCA',
    'DISCK',
    'DG',
    'DLTR',
    //'DPS',
    //'EL',
    'EXPE',
    'FL',
    'F',
    'GPS',
    'GRMN',
    //'GIS',
    'GM',
    'GPC',
    'GT',
    'HBI',
    'HOG',
    //'HAR',
    'HAS',
    'HD',
    //'HRL',
    'IPG',
    //'SJM',
    //'K',
    //'KMB',
    'KSS',
    //'KHC',
    //'KR',
    'LB',
    'LEG',
    'LEN',
    'LKQ',
    'LOW',
    'M',
    'MAR',
    'MAT',
    //'MKC',
    'MCD',
    //'MJN',
    'KORS',
    //'MHK',
    //'TAP',
    //'MDLZ',
    'MNST',
    'NWL',
    'NWSA',
    'NWS',
    'NKE',
    'JWN',
    'ORLY',
    'OMC',
    //'PEP',
    //'PM',
    'RL',
    'PCLN',
    //'PG',
    'PHM',
    'PVH',
    //'RAI',
    'ROST',
    'RCL',
    'SNI',
    'SIG',
    'SNA',
    'SWK',
    //'SPLS',
    'SBUX',
    //'SYY',
    'TGT',
    'TGNA',
    //'CLX',
    //'HSY',
    'DIS',
    'TIF',
    'TWX',
    'TJX',
    'TSCO',
    'TRIP',
    'FOXA',
    'FOX',
    //'TSN',
    'ULTA',
    'UA',
    'UAA',
    'URBN',
    'VFC',
    'VIAB',
    //'WMT',
    //'WBA',
    'WHR',
    //'WFM',
    'WYN',
    'WYNN',
    'YUM'
]

export const energy = [
    'APC',
    'APA',
    'BHI',
    'COG',
    //'CNP',
    'CHK',
    'CVX',
    'XEC',
    //'CMS',
    'CXO',
    'COP',
    'DVN',
    //'DTE',
    //'DUK',
    'EOG',
    'EQT',
    //'ES',
    'XOM',
    //'FE',
    'FTI',
    'HAL',
    'HP',
    'HES',
    'KMI',
    'MRO',
    'MPC',
    'MUR',
    'NOV',
    'NFX',
    //'NEE',
    'NBL',
    //'NRG',
    'OXY',
    'OKE',
    'PSX',
    'PXD',
    'RRC',
    'SLB',
    //'SRE',
    'SWN',
    'TSO',
    'RIG',
    'VLO',
    //'WEC',
    'WMB'//,
    //'XEL'
]

//INDUSTRIALS

export const industrials = [
    'MMM',
    'AYI',
    'ALK',
    'ALLE',
    'AAL',
    'AME',
    'ARNC',
    'BA',
    'CHRW',
    'CAT',
    //'CF',
    'CTAS',
    'CSX',
    'CMI',
    'DE',
    'DAL',
    'DOV',
    'DNB',
    'ETN',
    'EMR',
    'EFX',
    'EXPD',
    'FAST',
    'FDX',
    'FLS',
    'FLR',
    'FTV',
    'FBHS',
    'GD',
    'GE',
    'GWW',
    'HAR',
    'HON',
    'ITW',
    'IR',
    'JBHT',
    'JEC',
    'JCI',
    'KSU',
    'LLL',
    'LMT',
    'MAS',
    'MHK',
    'NLSN',
    'NSC',
    'NOC',
    'PCAR',
    'PH',
    'PNR',
    //'PPG',
    'PWR',
    'RTN',
    'RSG',
    'RHI',
    'ROK',
    'COL',
    'ROP',
    'R',
    'LUV',
    'SRCL',
    'TXT',
    'TDG',
    'UNP',
    'UAL',
    'UPS',
    'URI',
    'UTX',
    'VRSK',
    'WM',
    'XYL'

]

export const materials = [
    'APD',
    'ALB',
    'AMAT',
    'AVY',
    'BLL',
    'CF',
    'DOW',
    'DD',
    'EMN',
    'ECL',
    'FMC',
    'FCX',
    'IP',
    'IFF',
    'LYB',
    'MLM',
    'MON',
    'NEM',
    'NUE',
    'PPG',
    'PX',
    'SEE',
    'SHW',
    'MOS',
    'VMC',
    'WRK'
]

export const utilities =[ 
    'AES',
    'LNT',
    'AEE',
    'AEP',
    'AWK',
    'CNP',
    'CMS',
    'ED',
    'D',
    'DTE',
    'DUK',
    'EIX',
    'ETR',
    'ES',
    'EXC',
    'FE',
    'NEE',
    'NI',
    'NRG',
    'PCG',
    'PNW',
    'PPL',
    'PEG',
    'SCG',
    'SRE',
    'SO',
    'WEC',
    'XEL'
]

export const realEstate =[
    'AMT',
    'AIV',
    'AVB',
    'BXP',
    'CBG',
    'CCI',
    'DLR',
    'EQIX',
    'EQR',
    'ESS',
    'EXR',
    'FRT',
    'GGP',
    'HCP',
    'HST',
    'IRM',
    'KIM',
    'MAC',
    'MAA',
    'PLD',
    'PSA',
    'O',
    'REG',
    'SLG',
    'SPG',
    'UDR',
    'VTR',
    'VNO',
    'HCN',
    'WY'
]

export const consumerStaples = [
    'MO',
    'ADM',
    'BF-B',
    'CVS',
    'CPB',
    'CHD',
    'KO',
    'CL',
    'CAG',
    'STZ',
    'COST',
    'COTY',
    'DPS',
    'EL',
    'GIS',
    'HRL',
    'SJM',
    'K',
    'KMB',
    'KHC',
    'KR',
    'MKC',
    'MJN',
    'TAP',
    'MDLZ',
    'PEP',
    'PM',
    'PG',
    'RAI',
    'SPLS',
    'SYY',
    'CLX',
    'HSY',
    'TSN',
    'WMT',
    'WBA',
    'WFM'
]

export const teleComm = [
    'T',
    'CTL',
    'FTR',
    'LVLT',
    'VZ'
]

<<<<<<< HEAD
export const favorites = [
    'CI',
    'LRCX',
    'PYPL',
    'V',
    'ANTM',
    'UNH',
    'MS',
    'DXC',
    'HPQ',
    'SYK',
    'SWK',
    'HRS',
    'MS',
    'AAPL'
   

]
=======
export const favorites = companyList.favorites

>>>>>>> upstream/master

export const allCompanies = companies.concat(financeCompanies, 
    healthCareCompanies, consumerDiscretionary, energy, 
    industrials, materials, utilities, realEstate, 
    consumerStaples, teleComm);