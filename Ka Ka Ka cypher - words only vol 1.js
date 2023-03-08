function kaCokadekaMe(word)
{
    const str = 'ka'+word.replace(/([aeiou]+)/gi,'$1ka')
    if (str.slice(-2)==='ka') return str.slice(0,-2)
    return str
}