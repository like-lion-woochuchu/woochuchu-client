# https://www.acmicpc.net/problem/14503
n, m = map(int, input().split())
r, c, d = map(int, input().split())
house = [list(map(int, input().split())) for _ in range(n)]
house[r][c] = 2
count = 1

while True:
    if d == 0:
        if not house[r][c-1]:
            d = 3
            c -= 1
            count += 1
            house[r][c] = 2
        else:
            if house[r][c-1] and house[r][c+1] and house[r-1][c] and house[r+1][c]:
                if house[r+1][c] == 1:
                    break
                else:
                    r += 1
            else:
                d = 3
    elif d == 3:
        if not house[r+1][c]:
            d -= 1
            r += 1
            count += 1
            house[r][c] = 2
        else:
            if house[r][c-1] and house[r][c+1] and house[r-1][c] and house[r+1][c]:
                if house[r][c+1] == 1:
                    break
                else:
                    c += 1
            else:
                d -= 1
    elif d == 2:
        if not house[r][c+1]:
            d -= 1
            c += 1
            count += 1
            house[r][c] = 2
        else:
            if house[r][c-1] and house[r][c+1] and house[r-1][c] and house[r+1][c]:
                if house[r-1][c] == 1:
                    break
                else:
                    r -= 1
            else:
                d -= 1
    else:
        if not house[r-1][c]:
            d -= 1
            r -= 1
            count += 1
            house[r][c] = 2
        else:
            if house[r][c-1] and house[r][c+1] and house[r-1][c] and house[r+1][c]:
                if house[r][c-1] == 1:
                    break
                else:
                    c -= 1
            else:
                d -= 1
print(count)
